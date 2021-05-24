const { MessageEmbed } = require('discord.js')
const db = require('quick.db')
exports.run = async (client, msg, args) => {
  if(!args.length) return msg.channel.send('Please provide what you want to suggest!')
  const channelId = db.get(`suggestionChannel_${msg.guild.id}`)
  if(channelId == 'none') return msg.channel.send('Suggestions are not setup here.')
  let channel = client.channels.cache.get(channelId)
  const suggestion = new MessageEmbed()
    .setAuthor(msg.guild.name, msg.guild.iconURL({dynamic: true}))
    .setTitle('Suggestion')
    .setDescription(`*Posted by: ${msg.author.tag}*\n${args.join(' ')}`)
    .setFooter(client.user.tag, client.user.avatarURL({format: "png"}))
    .setTimestamp()
  if(msg.attachments.first()) {
    suggestion.setImage(msg.attachments.first().url)
  }
  channel.send(suggestion)
  msg.channel.send('Sent! <#' + channel.id + '>')
}