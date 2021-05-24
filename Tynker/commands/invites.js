exports.run = (client, msg, args) => {
  const db = require("quick.db");
  const Discord = require("discord.js");
  
  const user = msg.author || msg.mentions.users.first()
  let invites = db.get(`totalinvites_${msg.guild.id}_${user.id}`)
  if (invites === null) invites = 0
  
  const embed = new Discord.MessageEmbed()
  .setAuthor(user.tag, user.displayAvatarURL())
  .setColor("BLUE")
  .setDescription(`${user} has (${invites}) invites.`)
  .setTimestamp()
  msg.channel.send(embed)
}