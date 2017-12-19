var Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
  console.log("Bot Online and Ready!");
});

bot.on("message", function(message) {
    if(message.content === "ping") {
        bot.sendMessage(message, "Hello, pong! Your on server **" + message.channel.server.name + "**");
    }
});

client.login(process.env.BOT_TOKEN);
