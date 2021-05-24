const db = require("quick.db");
const Discord = require("discord.js");

exports.run = (client, msg, args) => {
  if (args[0] === "defualt"){
    if (db.get(`theme_${msg.guild.id}_${msg.author.id}`) === "defualt") return msg.channel.send(`<@${msg.author.id}>, You already have defualt theme enabled.`)
  } else {
    db.set(`theme_${msg.guild.id}_${msg.author.id}`, "defualt")
    msg.channel.send(`<@${msg.author.id}>, Defualt Theme has been Enabled.`)
  }
}