const fetch = require('node-fetch')
const { MessageEmbed } = require('discord.js')
exports.run = (client, message, args) => {
const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js')
exports.run = async (client, msg, args) => {
  fetch('https://official-joke-api.appspot.com/random_joke')
    .then(res => res.json())
    .then(json => msg.channel.send(
      new MessageEmbed()
      .setAuthor(msg.author.tag, msg.author.avatarURL({dynamic: true}))
      .setTitle(json.setup)
      .setDescription('Answer: ||' + json.punchline + '||')
      .setFooter(msg.guild.name, msg.guild.iconURL({dynamic: true}))
      .setTimestamp()
    ));
}
  }