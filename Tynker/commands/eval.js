const { MessageEmbed } = require('discord.js')
const db = require('quick.db')
exports.run = async (client, msg, args) => {
if(!msg.author.id == "622903645268344835" || !msg.author.id == "722540557460570224") return msg.channel.send('<:failure:820475214290485328> You cannot use this command.')
  var result = args.join(" ")
  let evaled = eval(result)
}