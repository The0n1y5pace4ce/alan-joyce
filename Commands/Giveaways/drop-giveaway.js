const {
    SlashCommandBuilder,
    PermissionFlagsBits,
    ChatInputCommandInteraction,
    EmbedBuilder,
    PermissionsBitField
  } = require("discord.js");
  const messages = require('../../Structures/Utils/messages')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('drop-giveaway')
    .setDescription('Create a drop giveaway')
    .addIntegerOption((options) => 
    options
        .setName('winners')
        .setDescription('How many winners the giveaway should have')
        .setRequired(true)
    )
    .addStringOption((options) => 
    options
        .setName('prize')
        .setDescription('What the prize of the giveaway should be')
        .setRequired(true)
    )
    .addChannelOption((options) =>
    options
        .setName('channel')
        .setDescription('The channel to start the giveaway in')
        .setRequired(true)
    ),

    async execute(interaction, client) {
        if(!interaction.member.permissions.has(PermissionFlagsBits.ManageEvents)){
            return interaction.reply({
                content: ':x: You need to have the giveaway host role to start giveaways.',
                ephemeral: true
            });
        }
    
        const giveawayChannel = interaction.options.getChannel('channel');
        const giveawayWinnerCount = interaction.options.getInteger('winners');
        const giveawayPrize = interaction.options.getString('prize');
    
        if(!giveawayChannel.isTextBased()) {
            return interaction.reply({
                content: ':x: Selected channel is not text-based.',
                ephemeral: true
            });
        }

        // Start the giveaway
        client.giveawaysManager.start(giveawayChannel, {
            // The number of winners for this drop
            winnerCount: giveawayWinnerCount,
            // The prize of the giveaway
            prize: giveawayPrize,
            // Who hosts this giveaway
            hostedBy: client.config.hostedBy ? interaction.user : null,
            // specify drop
            isDrop: true,
            // Messages
            messages
        });
    
        interaction.reply({content: `Giveaway started in ${giveawayChannel}!`, ephemeral: true});
    }
}