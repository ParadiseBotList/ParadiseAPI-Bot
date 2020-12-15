const { readdirSync } = require("fs")
const { join } = require("path")
const filePath = join(__dirname, "..", "commands");

module.exports.run = (paradise_api) => {
    for (const cmd of readdirSync(filePath).filter(cmd => cmd.endsWith(".js"))) {
        const prop = require(`${filePath}/${cmd}`);
        paradise_api.commands.set(prop.help.name, prop);

         if(prop.help.aliases) for (const alias of prop.help.aliases) {
             paradise_api.aliases.set(alias, prop);
         }
    }
}
