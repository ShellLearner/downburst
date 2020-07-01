const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const prefix = config.prefix

client.on("ready", () => {
	console.log("Bot is online!");
});

client.on("message", message => {
	if (!message.content.startsWith(prefix) || message.author.bot) {return};
	//prevents bots calling each other + messages not containing the prefix ignored
	
 	if 
});

client.login(config.token);
