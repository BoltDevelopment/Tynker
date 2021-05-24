const Discord = require("discord.js");
const db = require("quick.db");

exports.run = (client, msg, args) => {
  
  const user = msg.mentions.users.first() || msg.author;
  
  let bal = db.fetch(`money_${msg.guild.id}_${user.id}`)
let theme = db.get(`theme_${msg.guild.id}_${user.id}`)
if (theme === null) theme = "defualt";


if (bal === null) bal = 0;
let bank = db.fetch(`bank_${msg.guild.id}_${user.id}`)  
if (bank === null) bank = 0;
let bio = db.get(`bio_${msg.guild.id}_${user.id}`)
if(bio == null) bio = "No bio set."
  let { MessageEmbed } = require("discord.js");
  let avatar = user.displayAvatarURL({dynamic: true})
  
  let level = db.get(`level_${msg.guild.id}_${user.id}`);
  if (level === null) level = 0
  
  let prefix = db.get(`prefix_${msg.guild.id}`)
  if (prefix === null) prefix = "$"
  
  const embed = new MessageEmbed()
  .setAuthor(user.tag, avatar)
  .setThumbnail(avatar)
  .setFooter(user.tag, avatar)
  .addField("Info", `\`Name:\` ${user.tag}, \`Avatar:\` [Avatar](${avatar}), \`Net Worth:\` ${bal + bank}, \`Level:\` ${level}`, true)
  .addField('Bio', bio, true)
  .addField("User Profile Theme", theme, true)
  .setTimestamp()
  msg.channel.send(embed)
}