const db = require('quick.db')
exports.run = async (client, msg, args) => {
if (!msg.member.hasPermission('MANAGE_ROLES')) return msg.channel.send('You do not have permission to run this command.')
let prefix = db.get(`prefix_${msg.guild.id}`)
if(prefix == null) prefix = "$"
if(!args[0]) return msg.channel.send(`Invalid arguments, usage: \`${prefix}muterole <set/remove> [@role]\``)
if(args[0] == "set") {
  const role = msg.mentions.roles.first()
  db.set(`muterole_${msg.guild.id}`, role.id)
  msg.channel.send('Changed the mute role to `' + role.id + '`')
  const loggingChannelId = db.get(`loggingChannel_${msg.guild.id}`)
    if(loggingChannelId == "none") return
    const loggingChannel = client.channels.cache.get(loggingChannelId)
    loggingChannel.send(`${msg.author.tag} changed the mute role to <@&${role.id}>`)
}
if(args[0] == "remove") {
  db.set(`muterole_${msg.guild.id}`, null)
    msg.channel.send('Removed the mute role.')
    const loggingChannelId = db.get(`loggingChannel_${msg.guild.id}`)
    if(loggingChannelId == "none") return
    const loggingChannel = client.channels.cache.get(loggingChannelId)
    loggingChannel.send(`${msg.author.tag} removed the mute role`)

}
}