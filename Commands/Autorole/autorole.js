const { SlashCommandBuilder, PermissionsBitField } = require('discord.js');
const AutoRole = require('../../Structures/Schemas/autoroleschema');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('autorole')
    .setDescription('Configure the autorole')
    .addRoleOption(option =>
      option.setName('role')
        .setDescription('Select the role to be automatically given to new members')
        .setRequired(true))
    .addBooleanOption(option =>
      option.setName('show-message')
        .setDescription('Toggle whether to show a message when the autorole is given to a user')
        .setRequired(true))
    .addChannelOption(option =>
      option.setName('channel')
        .setDescription('Select the channel where a message should be sent when the autorole is given to a user')
        .setRequired(false)),
  async execute(interaction) {
    if (!interaction.member.permissions.has(PermissionsBitField.Flags.ManageRoles)) {
      return await interaction.reply({ content: ':x: You do not have the permissions to manage roles.', ephemeral: true });
    }

    const role = interaction.options.getRole('role');
    const showMessage = interaction.options.getBoolean('show-message');
    const channel = interaction.options.getChannel('channel');

    // Save the autorole configuration into the database
    const autoRole = new AutoRole({
      guildId: interaction.guildId,
      roleId: role.id,
      showMessage: showMessage,
      channelId: channel?.id
    });
    await autoRole.save();

    const reply = `✅ Autorole has been set to ${role.toString()}${showMessage ? ' and will show a message' : ''}${channel ? ` in the channel ${channel.toString()}` : ''}.`;
    await interaction.reply({ content: reply, ephemeral: true });

    // Give the auto role to new members and send a message if enabled
    interaction.client.on('guildMemberAdd', async (member) => {
      if (member.guild.id !== interaction.guildId) return;
      const autoRoleConfig = await AutoRole.findOne({ guildId: member.guild.id });
      if (!autoRoleConfig) return;
      const role = member.guild.roles.cache.get(autoRoleConfig.roleId);
      if (!role) return;
      await member.roles.add(role.id);
      if (autoRoleConfig.showMessage) {
        let messageChannel = member.guild.channels.cache.get(autoRoleConfig.channelId);
        if (!messageChannel && channel) {
          messageChannel = channel;
        }
        if (messageChannel) {
          await messageChannel.send(`${member.toString()}, you have been given the ${role.name} role.`);
        } else {
          await member.send(`You have been given the ${role.name} role in ${member.guild.name}.`);
        }
      }
    });
  },
};
