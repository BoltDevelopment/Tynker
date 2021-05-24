const {MessageEmbed} = require('discord.js')
exports.run = async (client, msg, args) => {
  if(!args[0]) return msg.channel.send('Please provide a package name')
  msg.channel.send(
    new MessageEmbed()
    .setTitle('npm package ' + args[0])
    .setURL('https://npmjs.org/package/' + args[0])
    .setImage(`https://nodei.co/npm/${args[0]}.png?downloads=true&downloadRank=true&stars=true`)
    .setDescription(`To install this package, use \`npm install ${args[0]}\``)
  )
}