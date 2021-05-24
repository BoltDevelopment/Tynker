const discord = require("discord.js")
const fetch = require('node-fetch');

exports.run = async (client, msg, args, level, settings, texts) => {
    const user = args[0];
    // Above is a self-deletion message prior to image sending when it's fetching the actual image.
const { MessageEmbed } = require('discord.js')
        fetch(`https://nekobot.xyz/api/imagegen?type=tweet&username=realdonaldtrump&text=${args.join('')}`).then(json => {
        msg.channel.send(new MessageEmbed()
        .setImage(json.message)
        );
        })
        // Below is a automatic logger
  
    // Above is a automatic logger
};