const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const prefix = config.prefix;
const fs = require("fs")


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

	/* NOTE: untested
	if (fs.existsSync(`commands/${command}.js`)) {
		const cmd = require(`commands/${command}.js`);
		cmd(args);
	}	else {
	message.channel.send("Sorry, this command does not exist.")
	return;
	};

	*/

	if (command === "ping") {
		message.channel.send("Pong! I'm alive, don't worry. Yet.")
	};

	if (command === "whoami"){
		//it's just easier to load the sleep function here
		const sleep = require("./sleep.js");

		message.channel.send(`Hmm. Let me check.`);
		message.channel.startTyping(2);
		await sleep(5000)
		message.channel.send(`It appears you're ${message.author.username}.`);
		message.channel.stopTyping(true);
	};

	if (command === "help"){
		console.log("help page called, hurry up and make one")
		message.channel.send("Hi! We do not currently have a help page configured. ~~Also there are only two commands, ping and whoami, so chill.~~");
	};

});

client.login(config.token);
