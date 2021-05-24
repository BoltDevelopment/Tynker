const db = require("quick.db");
let {MessageEmbed} = require("discord.js");

exports.run = (client, msg, args) => {
// invaild usage embed
let Discord = require("discord.js");
let prefix = db.get(`prefix_${msg.guild.id}`)
if (prefix === null) prefix = '$';

if (!args[0]) {
let embedusages = new MessageEmbed()
      .setAuthor(msg.guild.name, msg.guild.iconURL())
      .setDescription("<:failure:820475214290485328> Invaild Usage Given!")
      .addField("Examples", `${prefix}setprefix <New Prefix>`)
      .setColor("RED")
    return msg.channel.send(embedusages)
}
if (!msg.member.hasPermission("ADMINISTRATOR")){
let embed = new Discord.MessageEmbed()
      .setAuthor(msg.author.tag, msg.author.displayAvatarURL())
      .setDescription("<:failure:820475214290485328> Invaild Permissions! Missing: \`ADMINSTATOR\`")
      .setColor("RED")
      return msg.channel.send(embed)
// failure permissions check embed
  }


db.set(`prefix_${msg.guild.id}`, args.join(' '))
// success embed 
    const embedsuccess = new Discord.MessageEmbed()
    .setAuthor(msg.author.tag, msg.author.displayAvatarURL())
    .setColor("GREEN")
    .setDescription(`<a:check:817966486378250241> Successfully  Updated the guilds prefix to \`${args.join(' ')}\``)
    msg.channel.send(embedsuccess)
    const loggingChannelId = db.get(`loggingChannel_${msg.guild.id}`)
    if(loggingChannelId == "none" || loggingChannelId == null) return
    const loggingChannel = client.channels.cache.get(loggingChannelId)
    loggingChannel.send(`${msg.author.tag} changed the prefix to \`${args.join(' ')}\``)
}