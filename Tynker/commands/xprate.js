const Discord = require("discord.js")
const db = require("quick.db");
var rootRequire = require('root-require');
var config = rootRequire('./config.js')
exports.run = (client, msg, args) => {
  if (!msg.member.hasPermission('ADMINSTATOR')){
    msg.reply(`${config.emojis.error} You do not have permission to use this command.`)
  }
  if (args[0] === "set") {
    db.set(`xprate_${msg.guild.id}`, args[1])
    msg.reply(`<:check:805308822368813086> Successfully set xprate to ${args[1]}.`)
  }
}

