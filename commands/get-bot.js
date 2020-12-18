const { MessageEmbed } = require ('discord.js');

/**
 * Import the Paradise API Module 
 */
const PBL = require ('paradiseapi.js');
const stats = new PBL();

module.exports.run = async (client, message, args) => {
    
    try {

    message.delete().catch()

    let bot_to_get = message.mentions.users.first()

   // if (!bot_to_get.bot) return message.channel.send('Please provide a bot that is listed on our website to getch info about');

    let botAvatarURL = `https://cdn.discordapp.com/avatars/${bot_to_get.id}/${bot_to_get.avatar}`

    stats.get(bot_to_get.id || args[0, function(bot_stats) {

        let getEmbed = new MessageEmbed()
            .setAuthor(bot_stats.username, botAvatarURL)
            .setDescription(bot_stats.shortDescription)
            .setColor(client.config.embed_color)
            .addField('Bot ID', bot_stats.botid, true)
            .addField('Bot Prefix', bot_stats.prefix, true)
            .addField('Certified', bot_stats.certified, true)
            .addField('Vanity URL', bot_stats.vanityURL, true)
            .addField('Votes', `${bot_stats.votes}`, true)
            .addField('👍 Likes', `${bot_stats.likes}`, true)
            .addField('👎 Dislikes', `${bot_stats.dislikes}`, true)
            .addField('Bot Tags', bot_stats.tags, true)
            .addField('Server Count', bot_stats.servers, true)
            .addField('Shard Count', bot_stats.shards, true)
            .addField('Made With', bot_stats.library, true)
            .addField('Support', bot_stats.server, true) 
            .addField('Website', bot_stats.website, true)
            .addField('GitHub', bot_stats.github, true)
            .addField('Made with ❤ by', `<@!${bot_stats.owner}>`, true)
            .setFooter(`Requested By: ${message.author.username }`, botAvatarURL)

        return message.channel.send(getEmbed)
    })
  } catch (e) {
     
    let errorMessage = new MessageEmbed()
        .setAuthor('(500) Internal Server Error', client.config.embed_image)
        .setDescription('An error occured while executing this command')
        .setColor(client.config.embed_color)
        .addField('Error Message', `${e.message}`)
        .setTimestamp()
        .setFooter('Yikes! Is it bad?', client.config.embed_image)

    return message.channel.send(errorMessage);
  }
} 

module.exports.help = {
    name: "get-bot",
    category: "Paradise API",
    aliases: ['botinfo'],
    description: "Fetch some information from our API about the provided bot",
    example: "api.get-bot <@Bot>"
}

module.exports.requirements = {
    userPerms: [],
    clientPerms: ["EMBED_LINKS"],
    ownerOnly: false
}

module.exports.limits = {
    rateLimit: 2,
    cooldown: 1e4
}
