const { Client, GatewayIntentBits, Partials, Collection } = require('discord.js')
const { Guilds, GuildMembers, GuildMessages, GuildVoiceStates, MessageContent, GuildPresences, GuildMessageReactions } = GatewayIntentBits
const { User, Message, GuildMember, ThreadMember, Channel} = Partials
const  { token } = require('./config.json')
// const { Connectors } = require("shoukaku");
// const { Kazagumo } = require("kazagumo");
// const Spotify = require("kazagumo-spotify");

const { loadEvents } = require('./Handlers/eventHandler')
const { loadButtons } = require('./Handlers/buttonHandler')
const { antiCrash } = require('./Handlers/AntiCrash.js')
const { loadModals } = require("./Handlers/modalHandler");
// const { loadShoukakuNodes } = require("./handlers/shoukakuNodes.js");
// const { loadShoukakuPlayer } = require("./handlers/shoukakuPlayer.js");

const client = new Client({ intents: [Guilds, GuildMembers, GuildMessages, GuildVoiceStates, MessageContent, GuildPresences, GuildMessageReactions], partials: [User, Message, GuildMember, ThreadMember, Channel] });

const { GiveawaysManager } = require('discord-giveaways');
client.giveawaysManager = new GiveawaysManager(client, {
    storage: "./giveaways.json",
    default: {
        botsCanWin: false,
        embedColor: "#FF0000",
        reaction: "🎉",
        lastChance: {
            enabled: true,
            content: '⚠️ **LAST CHANCE TO ENTER !** ⚠️',
            threshold: 10000,
            embedColor: '#FF0000'
        }
    }
});

client.giveawaysManager.on("giveawayReactionAdded", (giveaway, member, reaction) => {
    console.log(`${member.user.tag} entered giveaway #${giveaway.messageId} (${reaction.emoji.name})`);
});

client.giveawaysManager.on("giveawayReactionRemoved", (giveaway, member, reaction) => {
    console.log(`${member.user.tag} unreact to giveaway #${giveaway.messageId} (${reaction.emoji.name})`);
});

client.giveawaysManager.on("giveawayEnded", (giveaway, winners) => {
    console.log(`Giveaway #${giveaway.messageId} ended! Winners: ${winners.map((member) => member.user.username).join(', ')}`);
});

client.config = require("./config.json");
client.buttons = new Collection();
client.commands = new Collection();
client.events = new Collection();
client.tools = require('./Utils/Tools');
client.modals = new Collection();

loadEvents(client);
loadButtons(client);
antiCrash(client);
loadModals(client);
// loadShoukakuNodes(client);
// loadShoukakuPlayer(client);

// const kazagumoClient = new Kazagumo(
//     {
//       plugins: [
//         new Spotify({
//           clientId: client.config.spotifyClientID,
//           clientSecret: client.config.spotifySecret,
//         }),
//       ],
//       defaultSearchEngine: "youtube",
//       send: (id, payload) => {
//         let guild = client.guilds.cache.get(id);
//         if (guild) guild.shard.send(payload);
//       },
//     },
//     new Connectors.DiscordJS(client),
//     client.config.nodes,
//     {
//       moveOnDisconnect: false,
//       resume: true,
//       reconnectTries: 5,
//       restTimeout: 10000,
//     }
//   );
  
//   client.manager = kazagumoClient;

module.exports = client;

client
    .login(token)
    .catch((err) => console.log(err))