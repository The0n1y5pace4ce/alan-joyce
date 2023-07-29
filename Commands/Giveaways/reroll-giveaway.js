const {
    SlashCommandBuilder,
    PermissionFlagsBits,
    ChatInputCommandInteraction,
    EmbedBuilder,
    PermissionsBitField
  } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName('reroll-giveaway')
    .setDescription('Reroll a giveaway')
    .addStringOption((option) =>
    option
        .setName('giveaway')
        .setDescription('The giveaway to reroll (message ID or prize)')
        .setRequired(true)),

    async execute(interaction, client) {
        if(!interaction.member.permissions.has(PermissionFlagsBits.ManageEvents)){
            return interaction.reply({
                content: ':x: You need to have the giveaway host role to reroll giveaways.',
                ephemeral: true
            });
        }
        const query = interaction.options.getString('giveaway');

        // try to found the giveaway with prize then with ID
        const giveaway = 
            // Search with giveaway prize
            client.giveawaysManager.giveaways.find((g) => g.prize === query && g.guildId === interaction.guild.id) ||
            // Search with giveaway ID
            client.giveawaysManager.giveaways.find((g) => g.messageId === query && g.guildId === interaction.guild.id);

        // If no giveaway was found
        if (!giveaway) {
            return interaction.reply({
                content: 'Unable to find a giveaway for `'+ query +'`.',
                ephemeral: true
            });
        }

        if (!giveaway.ended) {
            return interaction.reply({
                content: 'The giveaway is not ended yet.',
                ephemeral: true
            });
        }

        // Reroll the giveaway
        client.giveawaysManager.reroll(giveaway.messageId)
        .then(() => {
            // Success message
            interaction.reply({content: 'Giveaway rerolled!', ephemeral: true});
        })
        .catch((e) => {
            interaction.reply({
                content: e,
                ephemeral: true
            });
        });
    }
}