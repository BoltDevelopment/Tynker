var root = require('rootrequire')
let config = require(root + '/config.js');
const { MessageEmbed } = require('discord.js')
exports.run = async (client, message, args) => {
  message.channel.send(new MessageEmbed()
  .setAuthor(client.user.tag, client.user.avatarURL({dynamic: true}))
  .setTitle(`Invite ${client.user.username}`)
  .setDescription(`[Click Here](${config.inviteURL})`)
  )
}