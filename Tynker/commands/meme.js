const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js')
exports.run = async (client, message, args) => {
  fetch('https://meme-api.herokuapp.com/gimme')
    .then(res => res.json())
    .then(json => message.channel.send(
      new MessageEmbed()
      .setAuthor('r/' + json.subreddit + ' | Posted by: u/' + json.author, null, 'https://reddit.com/r/' + json.subreddit)
      .setTitle(json.title)
      .setURL(json.postLink)
      .setImage(json.url)
    ));
}