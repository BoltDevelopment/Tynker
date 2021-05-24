const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

exports.run = async (client, msg, args) => {
let prefix = db.get(`prefix_${msg.guild.id}`)
if(prefix === null) prefix = "$"
  let user = msg.author;

  let verified = db.get(`verified_${msg.guild.id}_${msg.author.id}`)


  let timeout = 86400000;
  let amount = 200;

  let daily = db.get(`daily_${msg.guild.id}_${user.id}`);

  if (daily !== null && timeout - (Date.now() - daily) > 0) {
    let time = ms(timeout - (Date.now() - daily));
  
    let timeEmbed = new Discord.MessageEmbed()
    .setColor("RED")
    .setDescription(`<:xmark:805308855844208660> You've already collected your daily reward\n\nCollect it again in ${time.hours}h ${time.minutes}m ${time.seconds}s `);
    msg.channel.send(timeEmbed)
  } else {
    let moneyEmbed = new Discord.MessageEmbed()
  .setColor("GREEN")
  .setDescription(`<:check:805308822368813086> You've collected your daily reward of ${amount} coins`);
  msg.channel.send(moneyEmbed)
  db.add(`money_${msg.guild.id}_${user.id}`, amount)
  db.set(`daily_${msg.guild.id}_${user.id}`, Date.now())
  }
 }
