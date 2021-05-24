exports.run = (client, msg, args) => {
  const Discord = require("discord.js");
  const db = require("quick.db");


let { MessageEmbed } = require("discord.js")
let prefix = db.get(`prefix_${msg.guild.id}`)
  if (!args.length){
    return msg.channel.send(new MessageEmbed()
    .setAuthor(msg.author.tag, msg.author.displayAvatarURL())
    .setColor("RED")
    .setDescription("<:failure:820475214290485328> You dont have the right arguments.")
    .addField("Example Command", `${prefix}subtractlevel <user> <amount>`)
    .addField("Commands", `${prefix}help commands`)
)
}
  if (msg.member.hasPermission('ADMINSTATOR')){
    let user = msg.mentions.users.first()
  db.subtract(`level_${msg.guild.id}_${user.id}`, args[1])
  let newLevel = db.get(`level_${msg.guild.id}_${user.id}`)
// success embed 
    const embedsuccess = new Discord.MessageEmbed()
    .setAuthor(msg.author.tag, msg.author.displayAvatarURL())
    .setColor("GREEN")
    .setDescription(`<a:check:817966486378250241> Successfully  Updated \`${user.tag}'s\` level to \`${newLevel}\``)
    msg.channel.send(embedsuccess)
    let loggingChannelId = db.get(`loggingChannel_${msg.guild.id}`)
    if(!loggingChannelId == null) {
      let loggingChannel = client.channels.cache.get(loggingChannelId)
      loggingChannel.send(`**Level Updated**\n${msg.author.tag} updated ${user.tag}'s level to ${newLevel}`)
    }
  }
}