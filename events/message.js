const ms = require('parse-ms');
const { MessageEmbed } = require("discord.js");
const ratetime = new Set()

module.export = (paradise_api, message) => {

    try {

    if (message.author.bot) return;

    let pingMessage = new MessageEmbed()
        .setDescription('My prefix is `api.` || Example `api.help`');

        if (message.content === `<@${paradise_api.user.id}>` || message.content === `<@!${paradise_api.user.id}>`) return message.channel.send(pingMessage);

    let prefix = 'api.';

    const args = message.content.split(/ +/g);

    const commands = args.shift().slice(prefix.length).toLowerCase();

    const cmd = paradise_api.commands.get(commands) || paradise_api.aliases.get(commands);

    if (!message.content.toLowerCase().startsWith(prefix)) return;

    if (!cmd) return;

    if(!message.channel.permissionsFor(message.guild.me).toArray().includes('SEND_MESSAGES')) return;

    let devPerms = new MessageEmbed()
      .setAuthor('(403) Forbidden', paradise_api.config.embed_image)
      .setDescription('Only my Developer can execute this command.')
      .setColor(paradise_api.config.embed_color)
      .setTimestamp()
      .setFooter('LOL, Okay noob!!', paradise_api.config.embed_image)

    if (cmd.requirements.ownerOnly && !paradise_api.config.owner.includes(message.author.id))
      return message.channel.send(devPerms);

      if(cmd.limits) {
        const current = client.limits.get(`${commands}-${message.author.id}`);     
        if(!current) client.limits.set(`${commands}-${message.author.id}`, 1);    
        else{
            if(current >= cmd.limits.rateLimit) {
                let timeout = ms(cmd.limits.cooldown - (Date.now() - ratetime[message.author.id + commands].times));
                return message.reply("Ratelimit , You need to wait " + "``" + `${timeout.hours}h ${timeout.minutes}m ${timeout.seconds}s`+ "``")
            }
            client.limits.set(`${commands}-${message.author.id}`, current + 1);
            ratetime.add(message.author.id + commands)
            ratetime[message.author.id + commands] = {
                times: Date.now()
            }
        }
        setTimeout(() => {
            client.limits.delete(`${commands}-${message.author.id}`);
            ratetime.delete(message.author.id + commands)
        }, cmd.limits.cooldown);
    }

    let command_logs = paradise_api.guilds.cache.get(paradise_api.config.guildID).channels.cache.find(c => c.name === 'api-commands');

    let commandLog = new MessageEmbed()
      .setAuthor('Command Executed', paradise_api.config.embed_image)
      .setDescription(`${message.author.username} Has executed a command`)
      .setColor(paradise_api.config.embed_color)
      .addField('Command', commands, true)
      .addField('Guild', message.guild.name, true)
      .setTimestamp()
      .setFooter('Look at you go!', paradise_api.config.embed_image)

    command_logs.send(commandLog)

    cmd.run(client, message, args)

} catch (e) {
     
    let errorMessage = new MessageEmbed()
        .setAuthor('(500) Internal Server Error', paradise_api.config.embed_image)
        .setDescription('An error occured while executing this command')
        .setColor(paradise_api.config.embed_color)
        .addField('Error Message', `${e.message}`)
        .setTimestamp()
        .setFooter('Yikes! Is it bad?', paradise_api.config.embed_image)

    return message.channel.send(errorMessage);
  }
}