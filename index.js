const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const prefix = config.prefix

client.on("ready", () => {
	console.log("Bot is online!");
});

client.on("message", message => {
	
	//prevents bots calling each other and
	//messages not containing the prefix ignored
	if (!message.content.startsWith(prefix) || message.author.bot) {
		console.log ("ignored message");
		return
	};
	
});

client.login(config.token);
