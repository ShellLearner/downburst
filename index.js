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

	if (command === whoami){
		message.channel.send(`Hmm. Let me check.`);
		message.channel.startTyping();
		wait(5s);
		message.channel.send(`It appears you're ${message.author.username}.`);
		message.channel.stopTyping();
		
	}
});

client.login(config.token);
