const {
    SlashCommandBuilder,
    PermissionFlagsBits,
    ChatInputCommandInteraction,
    EmbedBuilder,
  } = require("discord.js");

  module.exports = {
    data: new SlashCommandBuilder()
    .setName("pilotinfo")
    .setDescription('g')
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

    execute(interaction) {

      // const guild = client.guilds.cache.get(`1054618178019414096`);

      // const channel = guild.channels.cache.find('1054619819917447208')

        interaction.reply({ content: 'ok', ephemeral: true})

        const embed = new EmbedBuilder()
        .setAuthor({
          name: "QantasGroup Aeronautica",
          iconURL: "https://media.discordapp.net/attachments/1090204614881710150/1123161166823309312/roowhite.png?width=910&height=910",
        })
        .setTitle("QantasGroup <:roored:1109001636434686022> Information For New Hires")
        .setDescription("Interested in a career with us?")
        .addFields(
          {
            name: "<:roored:1109001636434686022> For Jet Licensed Pilots",
            value: "QantasGroup offers:\n-Salary\n-A high degree of upward mobility and promotions for fulfilling the requriments in ⁠⁠ranks\n-Easy and intuitive to use flight-logger system\n-Custom made server ⁠exclusive ⁠<#1109347961558814761> and ⁠<#1109346808133591051> \n<#1102586927867252797>",
          },
          {
            name: "<:roored:1109001636434686022> For Multi Engine Licensed or Below",
            value: "QantasGroup offers a ⁠<#1110584589140889641> for new pilots Multi-Licensed or below.",
          },
          {
            name: "<:roored:1109001636434686022> Transferring from another Airline?",
            value: "Don't worry QantasGroup has got you covered. We will allow you to transfer your flight time over from the other Airline and you will still be eligible for the ⁠rank-bonuses! (Please note you must have evidence, in the form of a screenshot or spread sheet entry, or message link, etc.)",
          },
          {
            name: "<:roored:1109001636434686022> How To Join Us/Claim Bonuses and Salary?",
            value: "Go to ⁠<#1094838341842780250>  and ping a <@&1106825210696568873>  to get your rank as stated above, and if you aren’t already in the in-game airline ping a <@&1054619234971422750>  (please ping only one)",
          },
        )
        .setColor("#d10000");

        interaction.channel.send({ embeds: [embed]})

      //   channel.messages.fetch(`1054619819917447208-1105696919398920263`).then(message => {
      //     message.edit({ embeds: [embed]});
      // }).catch(err => {
      //     console.error(err);
      //});
    }
  }