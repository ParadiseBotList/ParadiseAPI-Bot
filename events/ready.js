const { readdirSync } = require("fs")
const { join } = require("path")
const filePath2 = join(__dirname, "..", "events");
const eventFiles2 = readdirSync(filePath2);
const timers = require("timers");
const botPackage = require('../package.json');

console.log(pjson.version);


module.exports = async (client) => {

    let devServerUpdateChannel = await client.guilds.cache.get('783235521656782898').channels.cache.get('791048891101216768');

    let activities = [
        {
            name: 'https://paradisebots.net/api/v1',
            options: {
                type: 'WATCHING',
            }
        },
        {
            name: 'api.help',
            options: {
                type: 'PLAYING',
            }
        }
    ];

    let i = 0;

    console.log(`Signed in as ${client.user.username} || Loaded [${eventFiles2.length}] events & [${client.commands.size}] commands`);

    const PBL = require("paradiseapi.js")
    const pbl = new PBL("788536521543122973", process.env.PARADISEAPI_TOKEN)
     
    pbl.post(client.guilds.cache.array().length, "1")

    timers.setInterval(() => {
        
        i = i == activities.length ? 0 : i;

        client.user.setActivity(activities[i].name, activities[i].options);

        i++; 

    }, 30000);

     devServerUpdateChannel.send(`Online and Ready to play with the API | Current Version: ${botPackage.version}`);
}
