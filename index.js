const aoijs = require("aoi.js");
const { token, prefix } = require("./config.json");
const bot = new aoijs.Bot({
    token,
    prefix,
    intents: ["GUILDS", "GUILD_MESSAGES" , "GUILD_VOICE_STATES"]
})
const {Panel} = require("@akarui/aoi.panel")
const panel = new Panel({
    username: "aoi_js",//username for logging in
    password: "error_123",//password for logging in
    secret: "aoi",//session secret
    port: 3000,//port on which website is hosted, Not required! Default 3000
    bot: bot,//your aoi.js client
    mainFile: "index.js",//Main file where code is running.Not required, default taken from package.json
    commands: "./commands/"
})
panel.loadPanel()//Load The Panel

panel.onError()


//Event
bot.onMessage()
//Command
const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd,"./commands/")


//Ready Event
bot.readyCommand({
    channel: "",
    code: `Logged in!`
})
bot.variables({
  prefix: "+" 
})
bot.variables({
color: "#ff5555",
errorcolor: "#303136",
  money: 0,
  chatbotChannel: ""
});
//bot command 
bot.command({
name: "ping",
code: ` WS PING : $PING MS`
})

bot.status({
  text: "Made by 💖 Japneet",
  type: "PLAYING",
  time: 12
})
mobilePlatform: true
bot.status({
  text: "Formula members winning",
  type: "WATCHING",
  time: 12
})
mobilePlatform: true
bot.status({
  text: "BedWars just like always",
  type: "PLAYING",
  time: 12
})
mobilePlatform: true
bot.status({
  text: "you lol jk",
  type: "WATCHING",
  time: 12
})
mobilePlatform: true
//Fact\\
bot.command({
  name: "fact",
  code: `
$title[#2 Fact]
$description[
$jsonRequest[https://api.popcat.xyz/fact;fact;could not find fact]]
$useChannel[1018195438098206740]
$color[$getVar[color]]`
})

bot.command({
name: "slash",
code: `
$createApplicationCommand[$guildID;aoijs;a cool slash command for aoijs;true;slash;message:sends a message:true:3]`
//This will make our slash command
})
bot.interactionCommand({
name: "slash",
prototype : 'slash',
code: `
$interactionReply[$author[1;$jsonRequest[https://api.popcat.xyz/lyrics?song=$message;artist;could]]
$thumbnail[$jsonRequest[https://api.popcat.xyz/lyrics?song=$message;image;could]]
$title[$jsonRequest[https://api.popcat.xyz/lyrics?song=$message;title;could]]
$description[>>> $jsonRequest[https://api.popcat.xyz/lyrics?song=$message;lyrics;could not find correct lyrics]]
$color[$getVar[color]]
$suppressErrors[An error occur error while making request from api or this lyrics not available in database.]]
` 
})
bot.onInteractionCreate()