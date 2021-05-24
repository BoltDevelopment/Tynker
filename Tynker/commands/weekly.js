const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

exports.run = async (client, msg, args) => {
  
  let prefix = db.fetch(`prefix_${msg.guild.id}`)
  if(prefix === null) prefix = "$"
  
  let verified = db.get(`verified_${msg.guild.id}_${msg.author.id}`)

  let user = msg.author;
  let timeout = 604800000;
  let amount = 500;

  let weekly = await db.fetch(`weekly_${msg.guild.id}_${user.id}`);

  if (weekly !== null && timeout - (Date.now() - weekly) > 0) {
    let time = ms(timeout - (Date.now() - weekly));
  
    let timeEmbed = new Discord.MessageEmbed()
    .setColor("RED")
    .setDescription(`<:xmark:805308855844208660> You have already collected your weekly reward\n\nCollect it again in ${time.days}d ${time.hours}h ${time.minutes}m ${time.seconds}s `);
    msg.channel.send(timeEmbed)
  } else {
    let moneyEmbed = new Discord.MessageEmbed()
  .setColor("GREEN")
  .setDescription(`<:check:805308822368813086> You've collected your weekly reward of ${amount} coins`);
  msg.channel.send(moneyEmbed)
  db.add(`money_${msg.guild.id}_${user.id}`, amount)
  db.set(`weekly_${msg.guild.id}_${user.id}`, Date.now())


  }
 }