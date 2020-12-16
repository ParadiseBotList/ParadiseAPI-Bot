const { MessageEmbed } = require ('discord.js');

const PBL = require ('paradiseapi.js');
const stats = new PBL();

module.exports.run = async (client, message, args) => {

    try {

        message.delete().catch()

        let user_to_get = message.mentions.users.first();

        if (!user_to_get || user_to_get.bot) return message.channel.send('Please ping a user to get info about from our API');

        let userAvatarURL = `https://cdn.discordapp.com/avatars/${user_to_get.id}/${user_to_get.avatar}`

        stats.getUser(user_to_get.id, function(user_stats) {

            let getEmbed = new MessageEmbed()
               .setAuthor(user_stats.userName, userAvatarURL)
               .setDescription(user_stats.bio)
               .addField('User ID', user_stats.userID, true)
               .addField('Certified', user_stats.certifiedUser, true)
               .addField('Vote Banned', user_stats.voteBanned, true)
               .setFooter('Note: Vote Banned = Cannot Vote for Bots', userAvatarURL)

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
    name: "get-user",
    category: "Paradise API",
    aliases: ['userinfo'],
    description: "Fetch some information from our API about the provided user",
    example: "api.get-user <@User>"
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
