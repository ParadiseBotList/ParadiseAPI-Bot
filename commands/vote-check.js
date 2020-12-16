const { MessageEmbed } = require ('discord.js');

/**
 * Import the Paradise API Module 
 */
const PBL = require ('paradiseapi.js');
const stats = new PBL();

module.exports.run = async (client, message, args) => {
    
    try {

    message.delete().catch()
    
    const [bot, user] = message.mentions.users.keyArray();

    if (!bot || !user) return message.channel.send('Please ping some Users or Provide IDs, The Order should be `api.vote-check @Bot @User');

    let userAvatarURL = `https://cdn.discordapp.com/avatars/${user_to_get.id}/${user_to_get.avatar}`

    stats.get(bot.id, function(vote_stats) {
    
        let voteStatus;
        
        let cachedUser = message.guild.members.cache.get(user.id);
        
        if(vote_stats.usersVoted.includes(user.id)) {
           voteStatus = true;
        } else {
           voteStatus = false;
        }

        let getEmbed = new MessageEmbed()
            .setAuthor(`${cachedUser.username} Vote Check`, userAvatarURL)
            .setColor(client.config.embed_color)
            .addField('User ID', user.id)
            .addField('Has Voted', voteStatus, true)
            .setFooter(`Requested By: ${message.author.username }`, userAvatarURL)

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
