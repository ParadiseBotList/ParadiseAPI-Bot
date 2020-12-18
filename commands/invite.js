const { MessageEmbed } = require ('discord.js');

module.exports.run = async (client, message, args) => {

    message.delete().catch()

    try {

        let inviteEmbed = new MessageEmbed()
        .setAuthor('Paradise API Invite', client.config.embed_image)
        .setDescription('Interested in using me in your server? Invite me here!!')
        .setColor(client.config.embed_color)
        .addField('Invite Link', `[Click Me](${client.config.inviteLink})`)
        .setTimestamp()
        .setFooter(`Currently In: ${client.guilds.cache.array().length} Servers`)
        
        return message.channel.send(inviteEmbed)

    } catch (e) {
        let error = new MessageEmbed()
        .setAuthor('(500) Internal Server Error', client.config.embed_image)
        .setDescription('An error occured while executing this command!')
        .setColor(client.config.embed_color)
        .addField('Error', `${e.message}`)
        .setTimestamp()
        .setFooter('Yikes, Is it bad!', client.config.embed_image)
        
        return message.channel.send(error)
    }
}

module.exports.help = {
    name: 'invite',
    category: 'Paradise API',
    aliases: ['invite-bot'],
    description: 'Sends you a invite link for Paradise API',
    example: 'api.invite'
}

module.exports.requirements = {
    userPerms: [],
    clientPerms: ['EMBED_LINKS'],
    ownerOnly: false
}

module.exports.limits = {
    rateLimits: 2,
    cooldown: ie4
}
