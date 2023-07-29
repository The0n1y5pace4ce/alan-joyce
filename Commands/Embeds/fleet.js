const {
    SlashCommandBuilder,
    PermissionFlagsBits,
    ChatInputCommandInteraction,
    EmbedBuilder,
  } = require("discord.js");

  module.exports = {
    data: new SlashCommandBuilder()
    .setName("fleet")
    .setDescription('g')
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

    execute(interaction) {

      // const guild = client.guilds.cache.get(`1054618178019414096`);

      // const channel = guild.channels.cache.find('1054619819917447208')

        interaction.reply({ content: 'ok', ephemeral: true})

        const realf = {
          "type": "rich",
      "title": `QantasGroup Aeronautica <:roored:1109001636434686022> Fleet`,
      "description": "",
      "color": 0xdd0000,
      "fields": [
        {
          "name": `<:roored:1109001636434686022> Qantas Mainline`,
          "value": `- Airbus A300-600R\n- Airbus A321neo\n- Airbus A330-200 & -300\n- Airbus A350-1000\n- Airbus A380-800\n- Boeing 707-320B\n- Boeing 737-300 & -800\n- Boeing 747-200B & -400ER & SP\n- Boeing 767-200ER & -300ER\n- Boeing 787-9 Dreamliner\n- Consolidated PBY-5 Catalina\n- DeHavilland DHC-84 Dragon Raptide\n- Douglas DC-3 Dakota\n- Douglas DC-4\n- Douglas DC-6B\n- Lockheed L-1049 Super Constellation`
        },
        {
          "name": `<:roored:1109001636434686022> Qantaslink`,
          "value": `- Airbus A220-300\n- Airbus A320-200\n- BAe 146-100 & 146-300\n- Bombardier Dash 8 Q-100 & Q-400\n- Embraer Erj-190-100\n- Fokker F100\n- Boeing 717-200`
        },
        {
          "name": `<:roored:1109001636434686022> Qantas Freight`,
          "value": `- Airbus A330-200F\n- Boeing 737-300F\n- Boeing 747-400F & -8f\n- Boeing 767-200F & -300F\n- BAe 146-300F`
        },
        {
          "name": `<:roored:1109001636434686022> Jetstar`,
          "value": `- Airbus A320-200\n- Airbus A321neo\n- Airbus A330-200\n- Boeing 717-200\n- Boeing 787-9 Dreamliner`
        },
        {
          "name": `<:roored:1109001636434686022> Australia Asia Airlines`,
          "value": `- Boeing 747SP\n- Boeing 767-300`
        },
        {
          "name": `<:roored:1109001636434686022> Air Australia`,
          "value": `- Airbus A320-200\n- Airbus A330-200`
        },
        {
          "name": `<:roored:1109001636434686022> Australian Airlines`,
          "value": `- Boeing 767-300ER`
        },
        {
          "name": `<:roored:1109001636434686022> Trans Australian Airlines`,
          "value": `- Airbus A300-600R\n- Boeing 727-200\n- Boeing 737-300\n- Convair PBY-5 Catalina\n- Douglas DC-3 Dakota\n- Douglas DC-4\n- Douglas DC-6B\n- Douglas DC-9-10\n- Fokker Friendship F27-100`
        }
      ],
      "author": {
        "name": `QantasGroup Aeronautica`,
        "icon_url": `https://media.discordapp.net/attachments/1095834535394017320/1108759679129108590/Kanga-02.png?width=910&height=910`
      }
        }

        const fictf = {
          "type": "rich",
          "title": `QantasGroup Aeronautica <:roored:1109001636434686022> Fictional Fleet`,
          "description": "",
          "color": 0xdd0000,
          "fields": [
            {
              "name": `<:roored:1109001636434686022> Qantas Mainline`,
              "value": `- Aerospatiale/BAC Concorde\n- Airbus A330-900neo\n- Airbus A350-900ulr\n- Hypermach Sonicstar`
            }
          ],
          "author": {
            "name": `QantasGroup Aeronautica`,
            "icon_url": `https://media.discordapp.net/attachments/1095834535394017320/1108759679129108590/Kanga-02.png?width=910&height=910`
          }
        } 

        const ansett = new EmbedBuilder()
          .setAuthor({
            name: "QantasGroup Aeronautica",
            iconURL: "https://media.discordapp.net/attachments/1090204614881710150/1118784558150729768/Kanga-01.png",
          })
          .setTitle("QantasGroup Aeronautica <:roored:1109001636434686022> Ansett Subsidiary Fleet")
          .addFields(
            {
              name: "<:AnsettStarGold:1118785117595369573> Propeller Fleet",
              value: "•    Fokker F27 Friendship\n•    De Havilland Twin Otter\n•    Fairchild Metro 23\n•    Fokker 50\n•    Saab 340",
            },
            {
              name: "<:AnsettStarGold:1118785117595369573> Jet Fleet",
              value: "•    Bombardier CRJ-200\n•    BAe146-300 \n•    BAe146-300F\n•    Boeing 737-300 \n•    Airbus A320-200\n•    Boeing 767-200",
            },
            {
              name: "<:AnsettStarWhite:1118785163426549780> International Fleet",
              value: "•    Boeing 767-300 \n•    Boeing 747-200\n•    Boeing 747-400",
            },
            {
              name: "<:AnsettStarWhite:1118785163426549780> Cargo Fleet",
              value: "•    Boeing 727-200F",
            },
          )
          .setColor("#DD0000")

        interaction.channel.send({ embeds: [realf, fictf, ansett]})

      //   channel.messages.fetch(`1109091559535804508-1109277752927997963`).then(message => {
      //     message.edit({ embeds: [realf, fictf, ansett]});
      // }).catch(err => {
      //     console.error(err);
      // });
    }
  }