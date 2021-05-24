const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

exports.run = (client, msg, args) => {

let prefix = db.get(`prefix_${msg.guild.id}`)
if(prefix === null) prefix = "$"

  let verified = db.get(`verified_${msg.guild.id}_${msg.author.id}`)


  let user = msg.author;

  let member = db.fetch(`money_${msg.guild.id}_${user.id}`)
  let member2 = db.fetch(`bank_${msg.guild.id}_${user.id}`)

  if (args[0] == 'all') {
    let money = db.fetch(`bank_${msg.guild.id}_${user.id}`)
    
    db.subtract(`bank_${msg.guild.id}_${user.id}`, money)
    db.add(`money_${msg.guild.id}_${user.id}`, money)
    let embed5 = new Discord.MessageEmbed()
  .setColor("GREEN")
  .setAuthor(user, user.displayAvatarURL())
  .setThumbnail(user.displayAvatarURL())
  .setDescription(`<:check:805308822368813086> You have withdrawn all your coins from your bank`);
  msg.channel.send(embed5)
  
  } else {

  let embed2 = new Discord.MessageEmbed()
  .setThumbnail(user.displayAvatarURL())
  .setAuthor(user.tag, user.displayAvatarURL())
  .setColor("RED")
  .setDescription(`<:xmark:805308855844208660> Specify an amount to withdraw`);
  
  if (!args[0]) {
      return msg.channel.send(embed2)
  }
  let embed3 = new Discord.MessageEmbed()
  .setAuthor(user.tag, user.displayAvatarURL())
  .setThumbnail(user.displayAvatarURL())
  .setColor("RED")
  .setDescription(`<:xmark:805308855844208660> can't withdraw negative money`);

  if (msg.content.includes('-')) { 
      return msg.channel.send(embed3)
  }
  let embed4 = new Discord.MessageEmbed()
.setAuthor(user.tag, user.displayAvatarURL())
  .setThumbnail(user.displayAvatarURL())
  .setColor("RED")
  .setDescription(`<:xmark:805308855844208660> You don't have that much money in the bank`);

  if (member2 < args[0]) {
      return msg.channel.send(embed4)
  }

  let embed5 = new Discord.MessageEmbed()
.setAuthor(user.tag, user.displayAvatarURL())
  .setThumbnail(user.displayAvatarURL())
  .setColor("GREEN")
  .setDescription(`<:check:805308822368813086> You have withdrawn ${args[0]} coins from your bank`);
 
  msg.channel.send(embed5)
  db.subtract(`bank_${msg.guild.id}_${user.id}`, args[0])
  db.add(`money_${msg.guild.id}_${user.id}`, args[0])
   }
  }
