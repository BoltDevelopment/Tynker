const Discord = require('discord.js');
exports.run = (client, message, args, distube) => {
distube.play(message, args.join(" "));
if(!message.channel.type === "voice") return message.channel.send("You Need to be in a Voice channel!")
}