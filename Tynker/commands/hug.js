const discord = require("discord.js");
const { Random } = require("something-random-on-discord");
const random = new Random();

exports.run = (client, msg, args) => {
    
    let target = msg.mentions.members.first()
    
    let data = random.getAnimeImgURL("hug");
    
    let embed = new discord.MessageEmbed()
    .setImage(data)
    .setColor("RANDOM")
    .setFooter(`${msg.author.username} hugs ${target.username}`)
    .setTimestamp()
    
    msg.channel.send(embed);
};