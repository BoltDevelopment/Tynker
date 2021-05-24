const db = require('quick.db')
exports.run = async (client, msg, args) => {
  if(!args[0]) return msg.channel.send('Provide what you want to reset')
  if(args[0] == "eco" || "economy") {
    reset_user_eco(msg.channel, msg.guild, msg.author)
  }
}
function reset_user_eco(channel, guild, user) {
  db.delete(`money_${guild.id}_${user.id}`)
  db.delete(`bank_${guild.id}_${user.id}`)
  channel.send('Reset your balance and bank in: ' + guild.name)
}