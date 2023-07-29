const {
    SlashCommandBuilder,
    PermissionFlagsBits,
    ChatInputCommandInteraction,
    EmbedBuilder,
  } = require("discord.js");

  module.exports = {
    data: new SlashCommandBuilder()
    .setName("salary")
    .setDescription('g')
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

    execute(interaction) {

      // const guild = client.guilds.cache.get(`1054618178019414096`);

      // const channel = guild.channels.cache.find('1054619819917447208')

        interaction.reply({ content: 'ok', ephemeral: true})

        const embed = new EmbedBuilder()
  .setAuthor({
    name: "QantasGroup Aeronautica",
    iconURL: "https://media.discordapp.net/attachments/1095834535394017320/1108759679129108590/Kanga-02.png?width=910&height=910",
  })
  .setTitle("Qantas Group Aeronautica <:roored:1109001636434686022> Salary")
  .addFields(
    {
      name: "<:roored:1109001636434686022> Requirements",
      value: "To earn salary for a flight, you must have in-game airline callsign for that flight it should be \"Qantas Flight XXX or XXXX\"",
    },
    {
      name: "<:roored:1109001636434686022> Crew Ranks",
      value: "- <@&1106813962600841286> - 1000 WP/h\n- <@&1102589146364661901> - 2000 WP/h\n- <@&1054619306232651796> - 3000 WP/h\n- <@&1054619225823641610> - 5000 WP/h\n- <@&1054619092092469349> - 7500 WP/h",
    },
    {
      name: "<:roored:1109001636434686022> Requesting Your Salary",
      value: "Ask an Operations Staff in <#1094838341842780250>, if you don't get a quick response, then ping one in ⁠req-discussions (only one of them)",
    },
  )
  .setImage("https://media.discordapp.net/attachments/1101067497316306974/1101083901205696595/Qantas-Logo.png?width=1446&height=910")
  .setColor("#d10000")
  .setTimestamp();

        interaction.channel.send({ embeds: [embed]})

      //   channel.messages.fetch(`1054619819917447208-1105696919398920263`).then(message => {
      //     message.edit({ embeds: [embed]});
      // }).catch(err => {
      //     console.error(err);
      //});
    }
}