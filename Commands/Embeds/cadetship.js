const {
    SlashCommandBuilder,
    PermissionFlagsBits,
    ChatInputCommandInteraction,
    EmbedBuilder,
  } = require("discord.js");

  module.exports = {
    data: new SlashCommandBuilder()
    .setName("cadetship")
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
      .setTitle("QantasGroup <:roored:1109001636434686022> Cadetship Program")
      .addFields(
        {
          name: "<:roored:1109001636434686022> Benefits",
          value: "- Complimentary aircraft\n- WP assistance for licenses",
        },
        {
          name: "<:roored:1109001636434686022> Requirements",
          value: "- Must not have Jet License",
        },
        {
          name: "<:roored:1109001636434686022> Other Notes",
          value: "- No prior experience required, you can even join from Ultralight license\n- You can join the program even if you have already got a single engine license",
        },
        {
          name: "<:roored:1109001636434686022> Program outline",
          value: "1. Cadet achieves single license\n2. Cadet is given KAI KC-100 (Single engine)\n3. Cadet achieves multi license\n4. Cadet is given Saab-340B (Multi engine)\n5. Cadet achieves jet license\n6. Cadet graduates and is hired as a third officer",
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