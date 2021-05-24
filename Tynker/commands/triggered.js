const Discord = require('discord.js')
const canvacord = require('canvacord')
exports.run = async (client, msg, args) => {
if(!args[0]) {
let avatar = msg.author.displayAvatarURL({ dynamic: false, format: 'png' });
let image = await canvacord.Canvas.trigger(avatar);
let attachment = new Discord.MessageAttachment(image, "triggered.gif");
return msg.channel.send(attachment);
} else {
let user = msg.mentions.users.first()
let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
let image = await canvacord.Canvas.trigger(avatar);
let attachment = new Discord.MessageAttachment(image, "triggered.gif");
return msg.channel.send(attachment);
}
}