const db = require("quick.db");
const Discord = require("discord.js")
exports.run = (client, msg, args) => { 
  let messageid = db.get(`snipemsg_${msg.channel.id}`)
  let senderid = db.get(`snipesender_${msg.channel.id}`)
  if(!messageid) return msg.channel.send(`There is nothing to snipe.`)
  let sender = client.users.cache.get(senderid);
  let embed = new Discord.MessageEmbed()
    .setAuthor(sender.tag, sender.displayAvatarURL())
    .setDescription(msg.channel.messages.fetch(messageid).content)
    .setColor("BLUE")
    .setTimestamp()
  msg.channel.send(embed)
}