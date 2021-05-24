
const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, msg, args) => {

  let user = msg.mentions.members.first() || msg.author;

  let verified = db.get(`verified_${msg.guild.id}_${msg.author.id}`)
if (verified === null) {
    db.set(`verified_${msg.guild.id}_${user.id}`, "false")
    msg.reply(`You Need To Register a Account by Doing \`${prefix}register\``)
}

  let money = await db.fetch(`money_${msg.guild.id}_${user.id}`)
  if (money === null) money = 0;

  let bank = await db.fetch(`bank_${msg.guild.id}_${user.id}`)
  if (bank === null) bank = 0;

  let vip = await db.fetch(`bronze_${msg.guild.id}_${user.id}`)
    if(vip === null) vip = 'None'
    if(vip === true) vip = 'Bronze'

  let shoes = await db.fetch(`nikes_${msg.guild.id}_${user.id}`)
  if(shoes === null) shoes = '0'

  let newcar = await db.fetch(`car_${msg.guild.id}_${user.id}`)
  if(newcar === null) newcar = '0'

  let newhouse = await db.fetch(`house_${msg.guild.id}_${user.id}`)
  if(newhouse === null) newhouse = '0'

  let moneyEmbed = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setAuthor(user.tag, user.displayAvatarURL())
  .setThumbnail(user.displayAvatarURL())
  .addField("New Car 🚘", newcar, true)
  .addField("New House 🏠", newhouse, true)
  .addField("Shoes 👟", shoes, true)
  .addField("Vip 💎", vip, true)
  msg.channel.send(moneyEmbed)
};