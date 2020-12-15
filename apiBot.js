const { Client, MessageEmbed, Collection } = require ('discord.js');
const config = require ('./config/settings.js');

const client = new Client({
    disableMentions: 'everyone',
    disabledEvents: ['TYPING_START']
});

client.commands = new Collection();
client.aliases = new Collection();

client.limits = new Map();

client.config = config;

client.on('ready', () => {
    console.log('API Bot is Online and Ready to fetch info');
});

const command = require ('./structures/command');
command.run(client);

const events = require ('./structures/event');
events.run(client);

client.login(config.token);
