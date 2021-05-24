const discord = require("discord.js")

exports.run = (client, msg, args) => {
    
    let embed = new discord.MessageEmbed()
    
      embed.setDescription(`[png](${msg.author.avatarURL({ dynamic: true, size: 1024, format: "png"})}) | [jpg](${msg.author.avatarURL({ dynamic: true, size: 1024, format: "jpg"})}) | [webp](${msg.author.avatarURL({ dynamic: true, size: 1024, format: "webp"})}) | [gif](${msg.author.avatarURL({ dynamic: true, size: 1024, format: "gif"})}) `)
      embed.setImage(msg.author.avatarURL({ dynamic: true, size: 1024}))
      embed.setColor("RANDOM")
    
      msg.channel.send(embed)
    
  }