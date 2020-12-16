const { MessageEmbed } = require ('discord.js');

module.exports.run = async (client, message, args) => {

    let info_commands = [
        "``api.help`` - Displays this help message",
        "``api.info`` - Displays some info about the bot."
    ]

    let api_commands = [
        "``api.get-bot`` - Get some information about a specified bot from our API",
        "``api.get-user`` - Get some information about the specified user from our API
    ]

    message.delete().catch()

        let prefix = 'api.'

        let embed = new MessageEmbed()
          .setAuthor('Paradise API Help', client.config.embed_image)
          .setDescription('Here is a List of my Available Commands')
          .setColor(client.config.embed_color)
          .addField('Information', info_commands)
          .addField('Paradise API', api_commands)
          .setTimestamp()
          .setFooter(`Requested By: ${message.author.username}`, client.config.embed_image)

    if (!args[0]) {
        return message.channel.send(embed)
    }

    if(args[0] && client.commands.has(args[0])) {

        const cmd = client.commands.get(args[0]);

        let cmdname = cmd.help.name.charAt(0).toUpperCase() + cmd.help.name.slice(1)

        let aliases = 'No aliases available for this command.'

        if (cmd.help.aliases.length === 0) {

            aliases = "No aliases available for this command."
        } else {
            aliases = cmd.help.aliases.join("\n")
        }

        let cmdEmbed = new MessageEmbed()
            .setAuthor(`Command: ${cmdname}`, client.config.embed_image)
            .setDescription(`Here is some info on the ${cmdname} command.`)
            .setColor(client.config.embed_color)
            .addField('Prefix', prefix, true)
            .addField('Name', cmd.help.name, true)
            .addField('Description', cmd.help.description, true)
            .addField('Category', cmd.help.category, true)
            .addField('Example', cmd.help.example, true)
            .addField('Aliases', "``" + aliases + "``")
            .setFooter('Syntax: <> = Required | [] = Optional', client.config.embed_image)

            return message.channel.send(cmdEmbed)
    }    
}

module.exports.help = {
    name: 'help',
    category: 'Information',
    aliases: ['h', 'helpme'],
    description: 'Displays my help message and a list of Commands.',
    example: 'api.help | api.help <cmd name>'
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
