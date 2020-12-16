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
        
    const cachedUser = message.guild.members.cache.get(user);
    const cachedUserID = message.guild.members.cache.get(user).id;
        
    const cachedBot = message.guild.members.cache.get(bot);
        
    const cachedUserName = message.guild.members.cache.get(user).username;

    if (!bot || !user) return message.channel.send('Please ping some Users or Provide IDs, The Order should be `api.vote-check @Bot @User');

    stats.get(bot, function(vote_stats) {
    
        let voteStatus;
        
        if(vote_stats.usersVoted.includes(user)) {
           voteStatus = true;
        } else {
           voteStatus = false;
        }

        let getEmbed = new MessageEmbed()
            .setAuthor(`Vote Check for ${vote_stats.username}`, client.config.embed_image)
            .setColor(client.config.embed_color)
            .addField('User ID', user, true)
            .addField('User Mention', `<@!${user}>`, true)
            .addField('Bot ID', vote_stats.botid, true)
            .addField('Bot Mention', `<@!${bot}>`, true)
            .addField('Has Voted', voteStatus, true)
            .addField('Total Vote Count', `${vote_stats.votes} Total Votes`, true)
            .setFooter(`Requested By: ${message.author.username}`, client.config.embed_image)

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
