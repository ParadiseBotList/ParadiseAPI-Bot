const { Client, MessageEmbed, Collection } = require ('discord.js');
const config = require ('./config/settings.js');

const paradise_api = new Client({
    disableMentions: 'everyone',
    disabledEvents: ['TYPING_START']
});

paradise_api.commands = new Collection();
paradise_api.aliases = new Collection();

paradise_api.limits = new Map();

paradise_api.config = config;

paradise_api.on('ready', () => {
    console.log('API Bot is Online and Ready to fetch info');
});

const command = require ('./structures/command');
command.run(paradise_api);

const events = require ('./structures/event');
events.run(paradise_api);

paradise_api.login(config.token);
