const {
    SlashCommandBuilder,
    PermissionFlagsBits,
    ChatInputCommandInteraction,
    EmbedBuilder,
  } = require("discord.js");

  module.exports = {
    data: new SlashCommandBuilder()
    .setName("newmember")
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
        .setTitle("Qantas Group Aeronautica <:roored:1109001636434686022> New Member Info")
        .addFields(
          {
            name: "<:roored:1109001636434686022> For Jet Licensed Pilots",
            value: "QantasGroup Aeronautica offers:\n- A <#1111256128140087507> for new hires\n⁠- <#1109012312641241118>for all flight time logged in ⁠<#1107995356765110272>\n- A high degree of upward mobility and promotions for fulfilling the requriments in ⁠<#1102586927867252797>\n- Easy and intuitive to use ⁠<#1107995356765110272> system.\n- Custom made server <#1109346808133591051> and <#1109347961558814761>\n- Frequent giveaways",
          },
          {
            name: "<:roored:1109001636434686022> For Multi Engine Licensed or Below",
            value: "QantasGroup Aeronautica offers a ⁠<#1110584589140889641> for new pilots Multi-Licensed or below.\nAlternatively Multi-Licensed pilots can work for the airline's susbsidiares that operate multi-engined aircraft.",
          },
          {
            name: "<:roored:1109001636434686022> Transferring from another Airline?",
            value: "Don't worry QantasGroup Aeronautica has got you covered. We will allow you to transfer your flight time over from the other Airline and you will still be eligible for the <#1111256128140087507>!\n\nPing a member of <@&1106825210696568873> to get your rank as stated above, and if you aren’t already in the in-game airline ping a member of <@&1054619234971422750> (please ping only one)",
          },
          {
            name: "<:roored:1109001636434686022> Staff and Contributor Positions",
            value: "Want to help grow QantasGroup Aeronautica or contribute to us with useful work, why not join one of our Departments/Teams?\n- <@&1090529040944869396>\n- <@&1100407119544586330>\n- <@&1054619234971422750>\n- <@&1106825210696568873>\n- <@&1106822948335140914>\nIf you would like to join got to <#1111260928437133374>",
          },
        )
        .setImage("https://media.discordapp.net/attachments/1101067497316306974/1101083901205696595/Qantas-Logo.png?width=1446&height=910")
        .setColor("#d10000")
        .setFooter({
          text: "Enjoy your time at QantasGroup Aeronautica!",
          iconURL: "https://media.discordapp.net/attachments/1095834535394017320/1108759679129108590/Kanga-02.png?width=910&height=910",
        })
        .setTimestamp();

        interaction.channel.send({ embeds: [embed]})

      //   channel.messages.fetch(`1054619819917447208-1105696919398920263`).then(message => {
      //     message.edit({ embeds: [embed]});
      // }).catch(err => {
      //     console.error(err);
      //});
    }
  }