const {
    SlashCommandBuilder,
    PermissionFlagsBits,
    ChatInputCommandInteraction,
    EmbedBuilder,
  } = require("discord.js");

  module.exports = {
    data: new SlashCommandBuilder()
    .setName("ranks")
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
        .setTitle("Qantas Group Aeronautica <:roored:1109001636434686022> Ranks")
        .addFields(
          {
            name: "<:roored:1109001636434686022> Training/Trainer Ranks",
            value: "- <@&1054619429540999220> <#1110584589140889641>\n- <@&1106814351039541248> - 20h",
          },
          {
            name: "<:roored:1109001636434686022> Crew Ranks",
            value: "- <@&1106813962600841286> - (Must have jet license)\n- <@&1102589146364661901> - 5h\n- <@&1054619306232651796> - 10h\n- <@&1054619225823641610> - 15h\n- <@&1054619092092469349> - 25h",
          },
          {
            name: "<:roored:1109001636434686022> Meet The Requirements?",
            value: "If you've logged the hours in your ⁠crew-logs then apply here: ⁠⁠<#1094838341842780250>",
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