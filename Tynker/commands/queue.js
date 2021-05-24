const Discord = require('discord.js')
exports.run = async (client, message, args, distube) => {
  let queue = distube.getQueue(message);
  message.channel.send(new Discord.MessageEmbed()
  .setTitle('Queue')
  .setDescription(queue.songs.map((song, id) => `**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``).slice(0, 10).join("\n"))
  .setColor("BLUE")
  .setTimestamp()
  .setFooter(`Requested By: ${message.author.tag}`, message.author.avatarURL({dynamic: true}))
  )
}