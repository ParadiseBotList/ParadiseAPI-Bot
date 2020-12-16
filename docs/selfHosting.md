# Self Hosting Guide
Here is some Information for those of you 
who are interested in Self Hosting a custom version of the bot.

---

###### Table of Contents  
* [Support](#support)
* [Supported Versions](#supported-versions)
* [Host Provider(s)](#host-providers)
* [Setup Instructions](#setup)
* [Run the Bot](#run-the-bot)


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

<a name="host-providers"/>

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
    * Save and Profit!
 
* **NOTE:** Token is best stored in `.env` as a .env file can not be shared/uploaded or downloaded

  2. __**Local Host**__
    * Same steps as above ^ minus the token

* Process Environment `.env`
  1. __**Heroku**__
    * Go to your Heroku Project Dashboard Settings
    * Under "Config Vars" click "Reveal Config Vars"
    * Add a Var as shown below
      ![Heroku Config Vars (.env)](https://media.discordapp.net/attachments/734686866690932767/788875658058793051/image0.png)
    * Save and Profit!

  2. __**Local Host**__
    * Rename `.example.env` to `.env`
    * Edit the file as needed
    * Save and Profit!

---

<a name="run-the-bot"/>

## Run the Bot
  * __**Heroku**__
    1. Upload your project to a Private GitHub
    2. Go to you Heroku Project Dashboard
    3. Navigate to Deploy settings
    4. Under Deployment Method select the GitHub Logo
    5. Link your GitHub account and the Repo you just made
    6. Click "enable automatic deploys"
    7. Click "Deploy Branch"
    8. Wait for it to Deploy and then check the logs the bot should start.

  * __**Local Host**__
    1. Open Command Prompt or Terminal in your Prinects Directory
    2. Run `npm install` and wait for it to finish
    3. Run `node apiBot.js`
    4. Success watch the logs

__**NOTE:**__
* If you experience any bugs or issues running the bit please contact us at the links provided at the top of this page.
