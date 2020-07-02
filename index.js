const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const prefix = config.prefix
const sleep = require("./sleep.js")


client.on("ready", () => {
	console.log("Bot is online!");
});

client.on("message", async (message) => {

	//prevents bots calling each other and
	//messages not containing the prefix ignored
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	//splits the commands from the argument
	const args = message.content.slice(prefix.length).trim().split(/\ +/g);
	const command = args.shift().toLowerCase();

	if (command === "ping") {
		message.channel.send("Pong! I'm alive, don't worry. Yet.")
	}

	if (command === "whoami"){
		message.channel.send(`Hmm. Let me check.`);
		message.channel.startTyping(2);
<<<<<<< HEAD
		await sleep(2000)
		message.channel.stopTyping(true);
		message.channel.send(`It appears you're ${message.author.username}.`);
=======
		await sleep(5000)
		message.channel.send(`It appears you're ${message.author.username}.`);
		message.channel.stopTyping(true);
>>>>>>> 879ba18d5127785abee4e2119dc1d26b553142e0

	}
});

client.login(config.token);
