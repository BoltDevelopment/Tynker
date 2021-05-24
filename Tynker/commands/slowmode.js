const db = require('quick.db')
exports.run = (client, msg, args) => {
  const loggingChannelId = db.get(`loggingChannel_${msg.guild.id}`)
    if(loggingChannelId == "none") return
    const loggingChannel = client.channels.cache.get(loggingChannelId)
    const amount = parseInt(args[0]);
    if (msg.member.hasPermission("MANAGE_CHANNEL"))
      if (isNaN(amount))
        return msg.channel.send("<a:crossWrong:It doesn't seem to be valid number");
    if (args[0] === amount + "s") {
      msg.channel.setRateLimitPerUser(amount);
      if (amount > 1) {
        msg.channel.send("slowmode is now " + amount + " seconds");
    loggingChannel.send(`${msg.author.tag} changed the slowmode in <#${msg.channel.id}> to ${amount}`)
    return;
      } else {
        msg.channel.send("slowmode is now " + amount + " second");
        loggingChannel.send(`${msg.author.tag} changed the slowmode in <#${msg.channel.id}> to ${amount}`)
        return;
      }
    }
    if (args[0] === amount + "min") {
      msg.channel.setRateLimitPerUser(amount * 60);
      if (amount > 1) {
        msg.channel.send("slowmode is now " + amount + " minutes");
        loggingChannel.send(`${msg.author.tag} changed the slowmode in <#${msg.channel.id}> to ${amount}`)
        return;
      } else {
        
        msg.channel.send("slowmode is now " + amount + " minute");
        loggingChannel.send(`${msg.author.tag} changed the slowmode in <#${msg.channel.id}> to ${amount}`)
        return;
      }
    }
    if (args[0] === amount + "h") {
      msg.channel.setRateLimitPerUser(amount * 60 * 60);
      if (amount > 1) {
        msg.channel.send("slowmode is now " + amount + " hours");
        loggingChannel.send(`${msg.author.tag} changed the slowmode in <#${msg.channel.id}> to ${amount}`)
        return;
      } else {
        msg.channel.send("slowmode is now " + amount + " hour");
        loggingChannel.send(`${msg.author.tag} changed the slowmode in <#${msg.channel.id}> to ${amount}`)
        return;
      }
    } else {
      msg.channel.send(
        "You can only set seconds(s), minutes(min) and hours(h)"
      );
    }
};