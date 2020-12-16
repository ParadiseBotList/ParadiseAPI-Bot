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

    let userAvatarURL = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}`
    let botAvatarURL = `https://cdn.discordapp.com/avatars/${bot.id}/${bot.avatar}`

    stats.get(bot.id, function(vote_stats) {
    
        let voteStatus;
        
        let cachedUser = message.guild.members.cache.get(user.id);
        let cachedBot = message.guild.members.cache.get(bot.id);
        
        if(vote_stats.usersVoted.includes(user.id)) {
           voteStatus = true;
        } else {
           voteStatus = false;
        }

        let getEmbed = new MessageEmbed()
            .setAuthor(`${cachedUser.username} Vote Check`, userAvatarURL)
            .setColor(client.config.embed_color)
            .addField('User ID', user.id, true)
            .addField('Bot ID', bot.id, true)
            .addField('Has Voted', voteStatus, true)
            .addField('Votes', `${cachedBot.username} has a total of ${vote_stats.votes} Votes.`, true)
            .setFooter(`Bot: ${cachedBot.username}`, botAvatarURL)

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
    name: "vote-check",
    category: "Paradise API",
    aliases: ['vc'],
    description: "Check if the Provided User has Voted for the Provided Bot",
    example: "api.vote-check <@Bot> <@User>"
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
