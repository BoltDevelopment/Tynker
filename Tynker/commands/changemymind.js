const Discord = require('discord.js')
const canvacord = require('canvacord')
exports.run = async (client, msg, args) => {
  if(!args.length) return msg.channel.send('Provide some text')
  let image = await canvacord.Canvas.changemymind(args.join(' '));
  let attachment = new Discord.MessageAttachment(image, "changemymind.png");
  return msg.channel.send(attachment);
}