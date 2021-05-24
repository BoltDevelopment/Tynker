exports.run = async (client, msg, args) => {
const { MessageEmbed } = require('discord.js');
msg.channel.send(`**<a:loading:805926905038503946>  |** Pinging...`).then(m =>{
  var ping = m.createdTimestamp - msg.createdTimestamp;
  var embed = new MessageEmbed()
    .setAuthor(msg.guild.name, msg.guild.iconURL({dynamic : true}))
    .setTitle('**:ping_pong: | Pong!**')
    .setDescription(`Your ping is ${ping}ms | The bot's ping is ${client.ws.ping}ms`)
    .setFooter(msg.author.tag, msg.author.avatarURL({dynamic : true}))
  setTimeout(function(){
    m.edit('**<:check:805308822368813086> |** Pinged!', embed);
  }, 1000)
});
}
