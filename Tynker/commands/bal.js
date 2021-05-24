const db = require('quick.db');
const Discord = require("discord.js");

exports.run = (client, msg, args) => {
let user = msg.mentions.members.first() || msg.author;
let bal = db.get(`money_${msg.guild.id}_${user.id}`)


if (bal === null) bal = 0;

let avatar = user.displayAvatarURL()

let bank = db.get(`bank_${msg.guild.id}_${msg.author.id}`)  
if (bank === null) bank = 0;

let prefix = db.get(`prefix_${msg.guild.id}`)
if (prefix === null) prefix = "$"
  let verified = db.get(`verified_${msg.guild.id}_${msg.author.id}`)


let moneyEmbed = new Discord.MessageEmbed()
    .setColor("BLUE")  
    .setAuthor(user.tag, avatar)
    .setThumbnail(avatar)
  .addField("Balance:", `<:dollar:819020070302515240> ${bal}`, true)
.addField("Bank:", `<:dollar:819020070302515240> ${bank}`, true)
.addField("Networth:", `📊 ${bank + bal}`, true);
msg.channel.send(moneyEmbed);
}