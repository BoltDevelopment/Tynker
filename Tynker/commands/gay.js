const DIG = require("discord-image-generation");
const Discord = require("discord.js");

exports.run = (client, msg, args) => {
 
 
  let avatar = msg.author.displayAvatarURL({format: "png"})
  
let img = new DIG.Gay().getImage(avatar);
let attach = new Discord.MessageAttachment(img, "gay.png");

msg.channel.send(attach)
}