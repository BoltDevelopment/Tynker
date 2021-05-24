const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

exports.run = (client, msg, args) => {

  let user = msg.author;
  let prefix = db.get(`prefix_${msg.guild.id}`)
  if(prefix === null) prefix = "$"
  
  let verified = db.get(`verified_${msg.guild.id}_${msg.author.id}`)


  if (args[0] == 'all') {
    let money = db.get(`money_${msg.guild.id}_${user.id}`)
    let bank =  db.get(`bank_${msg.guild.id}_${user.id}`)

    let embedbank = new Discord.MessageEmbed()
    .setColor('RED')
    .setDescription("<:check:805308822368813086> You don't have any money to deposit")

    if(money === 0) return msg.channel.send(embedbank)

    db.add(`bank_${msg.guild.id}_${user.id}`, money)
    db.subtract(`money_${msg.guild.id}_${user.id}`, money)
    let embed5 = new Discord.MessageEmbed()
  .setColor("GREEN")
  .setDescription(`<:check:805308822368813086> You have deposited all your coins into your bank`);
  msg.channel.send(embed5)
  
  } else {
  
  let embed2 = new Discord.MessageEmbed()
  .setColor("RED")
  .setDescription(`<:xmark:805308855844208660> Specify an amount to deposit`);
  
  if (!args[0]) {
      return msg.channel.send(embed2)
      .catch(err => console.log(err))
  }
  let embed3 = new Discord.MessageEmbed()
  .setColor("RED")
  .setDescription(`<:xmark:805308855844208660> You can't deposit negative money`);

  if (msg.content.includes('-')) { 
      return msg.channel.send(embed3)
  }
  let embed4 = new Discord.MessageEmbed()
  .setColor("RED")
  .setDescription(`<:xmark:805308855844208660> You don't have that much money`);

  if (member < args[0]) {
      return msg.channel.send(embed4)
  }

  let embed5 = new Discord.MessageEmbed()
  .setColor("GREEN")
  .setDescription(`<:check:805308822368813086> You have deposited ${args[0]} coins into your bank`);

  msg.channel.send(embed5)
  db.add(`bank_${msg.guild.id}_${user.id}`, args[0])
  db.subtract(`money_${msg.guild.id}_${user.id}`, args[0])
  }
}
