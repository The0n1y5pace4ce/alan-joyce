const {
    SlashCommandBuilder,
    PermissionFlagsBits,
    ChatInputCommandInteraction,
    EmbedBuilder,
  } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName('membercount')
    .setDescription('Get the current member count of the server!'),

    async execute(interaction, client) {
        const guild = interaction.guild
        const membercount = guild.memberCount
        const totalmembers = membercount - 2

        const embed = new EmbedBuilder()
        .setTitle('<:roored:1109001636434686022> Current Member Count <:roored:1109001636434686022>')
        .setDescription(`We currently have ${totalmembers} human members!`)
        .setAuthor({name: 'Qantas Group Aeronautica', iconURL: 'https://media.discordapp.net/attachments/1095834535394017320/1108759679129108590/Kanga-02.png?width=910&height=910'})
        .setColor('dd0000')

        interaction.reply({ embeds: [embed]})
    }
}