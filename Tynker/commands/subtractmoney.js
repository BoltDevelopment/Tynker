const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

exports.run = (client, msg, args) => {
       
       let prefix = db.get(`prefix_${msg.guild.id}`)
       if(prefix === null ) prefix = "$"
  let verified = db.get(`verified_${msg.guild.id}_${msg.author.id}`)

        if (!msg.member.hasPermission("ADMINISTRATOR")) return msg.channel.send("❌ You Do Not Have Permissions To Add Money! - [ADMINISTRATOR]");
        if (!args[0]) return msg.channel.send("**Please Enter A User!**")

        let user = msg.mentions.members.first() || msg.guild.members.cache.get(args[0]) || msg.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || msg.guild.members.cache.find(r => r.displayName.toLowerCase() === args[0].toLocaleLowerCase());
        if (!user) return msg.channel.send("**Enter A Valid User!**")
        if (!args[1]) return msg.channel.send("**Please Enter A Amount!**")
        if (isNaN(args[1])) return msg.channel.send(`**❌ Your Amount Is Not A Number!**`);
        if (args[0] > 10000) return msg.channel.send("**Cannot Add That Much Amount!**")
        db.subtract(`money_${user.id}`, args[1])
        let bal = db.fetch(`money_${user.id}`)

        let moneyEmbed = new MessageEmbed()
            .setColor("GREEN")
            .setDescription(`✅ Subtracted ${args[1]} coins\n\nNew Balance: ${bal}`);
        msg.channel.send(moneyEmbed)
        let loggingChannelId = db.get(`loggingChannel_${msg.guild.id}`)
    if(!loggingChannelId == null) {
      let loggingChannel = client.channels.cache.get(loggingChannelId)
      loggingChannel.send(`**Money Subtracted**\n${msg.author.tag} subtracted ${args[1]} from ${user.tag}'s balance`)
       }
    } 
