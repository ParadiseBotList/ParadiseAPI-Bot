# Self Hosting Guide
Here is some Information for those of you 
who are interested in Self Hosting a custom version of the bot.

---

## Support
* [Bug Reports](https://github.com/ParadiseBotList/ParadiseAPI-Bot/issues)

* [Discord Server](https://paradisebots.net/discord)

### Supported Versions

* Bot Versions
- [x] v0.0.1

* API Versions
- [x] v1.10.0


---

## Host Provider(s)
We personally use [Heroku](https://heroku.com/) which is a good (and free with 1000 hours/month) option
But you may also host the bot locally via your terminal/command console.

---

## Setup 

---

## Config
* `config/settings.js`
  1. __**Heroku**__
    * Go to `config/settings.js`
    * Edit the file as Needed
    * Token is best stored in `.env` as a .env file can not be shared/uploaded or downloaded

  2. __**Local Host**__
    * Same steps as above ^ minus the token

* Process Environment `.env`
  1. __**Heroku**__
    * Go to your Heroku Project Dashboard Settings
    * Under "Config Vars" click "Reveal Config Vars"
    * Add a Var as shown below
      ![Heroku Config Vars (.env)](https://media.discordapp.net/attachments/734686866690932767/788875658058793051/image0.png)

  2. __**Local Host**__
    *

---
