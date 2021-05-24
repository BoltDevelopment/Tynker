const { MessageEmbed } = require("discord.js");
const db = require('quick.db')
exports.run = (client, msg, args) => {
    if (!msg.member.hasPermission("MANAGE_ROLES")) {
      return msg.channel.send("sorry you need permission to mute someone");
    }
    if (!msg.guild.me.hasPermission("MANAGE_ROLES")) {
      return msg.channel.send("I do not have permission to mute");
    }

    const user = msg.mentions.members.first();

    if (!user) {
      return msg.channel.send("\```please mention the members for mute\```");
    }
    if (user.id === msg.author.id) {
      return msg.channel.send("I can't mute you because you are message author");
    }
    let reason = args.slice(1).join("");

    if (!reason) {
      return msg.channel.send(" \``` please give some  reason for mute\``` ");
    }

    const vrole = user.roles.cache
    const muteRoleId = db.get(`muterole_${msg.guild.id}`)
    let prefix = db.get(`prefix_${msg.guild.id}`)
    if(prefix == null) prefix = "$"
    if(muteRoleId == null) {
      return msg.channel.send(`There is no muterole. Set one with \`${prefix}muterole set <@role>\``)
    }
    let muterole = msg.guild.roles.cache.find(muteRoleId);
    
    user.roles.remove(vrole);
    user.roles.add(muterole);

     msg.channel.send(
      `you muted ${msg.mentions.users.first().username} for ${reason}`
    );

    user.send(`You got muted in ${message.guild.name} for ${reason} by ${msg.author.tag}`)
    const loggingChannelId = db.get(`loggingChannel_${msg.guild.id}`)
    if(loggingChannelId == "none") return
    const loggingChannel = client.channels.cache.get(loggingChannelId)
    loggingChannel.send(`${msg.author.tag} muted ${user.tag} for ${reason}`)
};