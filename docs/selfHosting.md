# Self Hosting Guide
Here is some Information for those of you 
who are interested in Self Hosting a custom version of the bot.

---

###### Table of Contents  
1. [Support](#support)
  2. [Supported Versions](#supported-versions)
    3. [Host Provider(s)](#host-probider(s))
  4. [Setup Instructions](#setup)
5. [Run the Bot]()


---

<a name="support"/>

## Support
* [Bug Reports](https://github.com/ParadiseBotList/ParadiseAPI-Bot/issues)

* [Discord Server](https://paradisebots.net/discord)

---

<a name="supported-versions"/>

### Supported Versions

* Bot Versions
- [x] v0.0.1

* API Versions
- [x] v1.10.0


---

<a name="host-provider(s)"/>

## Host Provider(s)
We personally use [Heroku](https://heroku.com/) which is a good (and free with 1000 hours/month) option
But you may also host the bot locally via your terminal/command console.

---

<a name="setup-instructions"/>

## Setup 

### Configuration
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
