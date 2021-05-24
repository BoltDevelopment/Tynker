const db = require('quick.db')
exports.run = async (client, msg, args) => {
if (!msg.member.hasPermission('MANAGE_CHANNELS')) return msg.channel.send('You do not have permission to run this command.')
let prefix = db.get(`prefix_${msg.guild.id}`)
if(prefix == null) prefix = '$'
if(!args[0]) return msg.channel.send(`Invalid arguments, usage: \`${prefix}autopublish <yes/no>\``)
if(args[0] == "true" || args[0] == "yes" || args[0] == "enable") {
  db.set(`autoPublish_${msg.guild.id}`, true)
  msg.channel.send('I will now autopublish messages in news channels.')
  db.get(`loggingChannel_${msg.guild.id}`)
  const loggingChannelId = db.get(`loggingChannel_${msg.guild.id}`)
    if(loggingChannelId == "none") return
    const loggingChannel = client.channels.cache.get(loggingChannelId)
    loggingChannel.send(`${msg.author.tag} turned on autoPublish.`)
}
if(args[0] == "false" || args[0] == "no" || args[0] == "disable") {
  db.set(`autoPublish_${msg.guild.id}`, false)
    msg.channel.send('I will now not autopublish messages in news channels.')
    const loggingChannelId = db.get(`loggingChannel_${msg.guild.id}`)
    if(loggingChannelId == "none") return
    const loggingChannel = client.channels.cache.get(loggingChannelId)
    loggingChannel.send(`${msg.author.tag} turned off autoPublish.`)

}
}