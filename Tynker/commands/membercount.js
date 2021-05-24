const Discord = require("discord.js");

exports.run = (client, msg, args) => {
    let embed = new Discord.MessageEmbed()
    .setDescription(
    `
Total Members - ${msg.guild.memberCount}
Humans - ${msg.guild.members.cache.filter(m => !m.user.bot).size}
Bots - ${msg.guild.members.cache.filter(m => m.user.bot).size}`)
    .setColor("RANDOM")
    .setTimestamp(msg.timestamp = Date.now())
    
    msg.channel.send(embed)
}