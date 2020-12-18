const { MessageEmbed, Discord, Colection } = require ('discord.js');

module.exports.run = async (client, message, args, config) => {

    message.delete().catch()

    try {

        const send = message.channel.send;
        
        let api_link = '``paradisebots.net/api/v1``'
        let npm_module = 'https://www.npmjs.com/package/paradiseapi.js'
        let docs_link = 'https://docs.paradisebots.net'
        let api_docs_link = 'https://paradisebots.net/api/v1/docs'

        let api_message = new MessageEmbed()
        .setAuthor('Paradise Bots API', client.config.embed_image)
        .setDescription('')
        .addField('API Version', 'v1.10.0', true)
        .addField('NPM Link(s)', npm_module, true)
        .addField('API Docs', api_docs_link, true)
        .addField('Paradise Docs', docs_link, true)
        .setTimestamp()
        .setFooter(`Requested By: ${message.author.username}`, client.config.embed_image)

        return send(api_message);

    } catch (e) {
        let error = new MessageEmbed()
        .setAuthor('(500) Internal Server Error', client.config.embed_image)
        .setDescription('An error occured while executing this command!')
        .addField('Error', `${e.message}`)
        .setTimestamp()
        .setFooter('Yikes, Is it bad!?', client.config.embed_image)

        return send(error);
    }
}

module.exports.help = {
    name: 'api-info',
    category: 'Paradise API',
    aliases: ['apiinfo'],
    description: 'Tells you some info about the Paradise Bots API',
    example: 'api.api-info'
}

module.exports.requirements = {
    userPerms: [],
    clientPerms: ['EMBED_LINKS'],
    ownerOnly: false
}

module.exports.limits = {
    rateLimits: 2, 
    cooldown: 1e4
}