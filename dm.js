
const Discord = require("discord.js");
const bot = new Discord.Client();
bot.login("NTU2NjU4MDc3MjQ4NTIwMTky.D2_IeA.e1wMffdZc50fky1B-DajIaWnwjI");

bot.on("ready", function() {
console.log("Ready.");
bot.user.setPresence({ status: 'idle', game: { name: 'Testing Commands' } });
})


bot.on("message", function(message) {
	if(message.content.toLowerCase() == "dm") {
		console.log("starting")
		bot.guilds.get(message.guild.id).members.forEach(member1 => {
			console.log(`DM'ed ${member1.user.tag}`)
			member1.send('```JOIN THESE SERVERS FOR **LEGIT** REWARDS!``` https://discord.gg/zMSdwV8 https://discord.gg/dv9QVnU')
		
		});
	}
	});
