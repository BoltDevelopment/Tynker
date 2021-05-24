const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

exports.run =  (client, msg, args) => {
  let user = msg.author;

  let timeout = 180000;
  let amount = Math.floor(Math.random() * 50) + 5;
  let prefix = db.get(`prefix_${msg.guild.id}`)
  if(prefix === null) prefix = "$"
  let verified = db.get(`verified_${msg.guild.id}_${msg.author.id}`)


  let beg = db.get(`beg_${msg.guild.id}_${user.id}`);

  if (beg !== null && timeout - (Date.now() - beg) > 0) {
    let time = ms(timeout - (Date.now() - beg));
  
    let timeEmbed = new Discord.MessageEmbed()
    .setColor("RED")
    .setAuthor(user.tag, user.displayAvatarURL())
    .setThumbnail(user.displayAvatarURL())
    .setDescription(`<:xmark:805308855844208660> You've already begged recently\n\nBeg again in ${time.minutes}m ${time.seconds}s `);
    msg.channel.send(timeEmbed)
  } else {
    let moneyEmbed = new Discord.MessageEmbed()
    .setAuthor(user.tag, user.displayAvatarURL())
    .setThumbnail(user.displayAvatarURL())
  .setColor("GREEN")
  .setDescription(`<:check:805308822368813086> You've begged and received ${amount} coins`);
  msg.channel.send(moneyEmbed)
  db.add(`money_${msg.guild.id}_${user.id}`, amount)
  db.set(`beg_${msg.guild.id}_${user.id}`, Date.now())


  }
}
