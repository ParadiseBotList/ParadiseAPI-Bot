module.exports.run = (client , message, args) => {
    const { inspect } = require("util")

    message.delete().catch()

    try {
        let toEval = args.join(" ")
        
        if (!toEval) {
            return message.channel.send(`Error while evaluating: \`air\``);
        } else {
            if(toEval.includes("client.token")) return message.channel.send("LOL, You wish!! -_-")
            let hrStart = process.hrtime()
            let hrDiff;
             let evaluated = inspect(eval(toEval, { depth: 0 }));
            hrDiff = process.hrtime(hrStart);
            return message.channel.send(`*Executed in ${hrDiff[0] > 0 ? `${hrDiff[0]}s ` : ''}${hrDiff[1] / 1000000}ms.*\n\`\`\`javascript\n${evaluated}\n\`\`\``, { maxLength: 1900 })
        }
        
    } catch (e) {
        return message.channel.send(`Error while evaluating: \`${e.message}\``);
    }
}

module.exports.help = {
    name: "eval",
    category: "owner",
    aliases: ['run'],
    description: "Evaluate code parts instead of open editor!",
    example: "``eval <code>``"
}

module.exports.requirements = {
    userPerms: [],
    clientPerms: ['EMBED_LINKS','SEND_MESSAGES'],
    ownerOnly: false,
    higherOnly: true
}

module.exports.limits = {
    rateLimit: 2,
    cooldown: 1e4
}
