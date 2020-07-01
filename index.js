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
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/\ +/g);
	const command = args.shift().toLowerCase();

	if (command === ping) {
		console.log("Pong! I'm alive, don't worry. Yet.")
	}
});

client.login(config.token);
