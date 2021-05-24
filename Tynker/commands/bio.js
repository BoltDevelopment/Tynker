const db = require('quick.db')
exports.run = async (client, msg, args) => {
  if(!args.length) return
  if(args[0] == "set") {
    let text = args.slice(1, 256).join(' ')
    if(!text) return
    db.set(`bio_${msg.guild.id}_${msg.author.id}`, text)
    msg.channel.send('Set your bio to: ' + text)
    if(db.get(`loggingChannel_${msg.guild.id}`) == null) return
    const loggingChannel = msg.guild.channels.cache.get(db.get(`loggingChannel_${msg.guild.id}`))
    loggingChannel.send(`${msg.author.tag} set their bio to ${text}`)
  }
  if(args[0] == "remove") {
    db.set(`bio_${msg.guild.id}_${msg.author.id}`, null)
    msg.channel.send('Removed your bio.')
    if(db.get(`loggingChannel_${msg.guild.id}`) == null) return
    const loggingChannel = msg.guild.channels.cache.get(db.get(`loggingChannel_${msg.guild.id}`))
    loggingChannel.send(`${msg.author.tag} removed their bio`)
  }
}