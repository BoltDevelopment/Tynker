const db = require("quick.db");
const Discord = require("discord.js");

exports.run = (client, msg, args) => {
  const vip = db.get(`bronze_${msg.guild.id}_${msg.author.id}`)
  if (vip === null){
    msg.channel.send(`<:failure:820475214290485328> You dont have vip.`)
  }
  if (vip === true){
    msg.channel.send(`<:GreenTick:817955795437748294> Vip Given And Enabled.`)
    let role = msg.guild.roles.cache .get('820144527527510026')
    let member = msg.author;
    msg.member.roles.add(role)
  }
}