const { readdirSync } = require("fs")
const { join } = require("path")
const filePath2 = join(__dirname, "..", "events");
const eventFiles2 = readdirSync(filePath2);
const timers = require("timers");

module.exports = async (paradise_api) => {

    let activities = [
        {
            name: 'https://paradisebots.net/api/v1',
            options: {
                type: 'WATCHING',
            }
        }
    ];

    let i = 0;

    console.log(`Signed in as ${paradise_api.user.username} || Loaded [${eventFiles2.length}] events & [${paradise_api.commands.size}] commands`);

    timers.setInterval(() => {
        
        i = i == activities.length ? 0 : i;

        paradise_api.user.setActivity(activities[i].name, activities[i].options);

        i++;

    }, 30000);
}