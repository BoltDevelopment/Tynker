exports.run = (client, msg, args) => {
    let db = require("quick.db")
            
    if (msg.deletable) {
        msg.delete();
    }

    if (!msg.member.hasPermission("MANAGE_MESSAGES")) {
        return msg.reply("Missing Permissions!").then(m => m.delete(5000));
    }

    if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
        return msg.reply("This is not a number").then(m => m.delete(5000));
    }

    let deleteAmount;
    if (parseInt(args[0]) > 100) {
        deleteAmount = 100;
    } else {
        deleteAmount = parseInt(args[0]);
    }

    msg.channel.bulkDelete(deleteAmount, false)
    .catch(err => msg.reply(`Something went wrong... ${err}`));
    const loggingChannelId = db.get(`loggingChannel_${msg.guild.id}`)
    if(loggingChannelId == "none") return
    const loggingChannel = client.channels.cache.get(loggingChannelId)
    loggingChannel.send(`${msg.author.tag} purged ${deleteAmount} message(s) in <#${msg.channel.id}>`)
    
}