const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

exports.run = (client, msg, args) => {
    if (!msg.member.hasPermission("ADMINISTRATOR")) {
      return msg.channel.send(
        "You should have admin perms to use this command!"
      );
    }

    const user = msg.mentions.members.first();

    if (!user) {
      return msg.channel.send(
        "Please Mention the person to who you want to warn - warn @mention <reaosn>"
      );
    }

    if (msg.mentions.users.first().bot) {
      return msg.channel.send("You can not warn bots");
    }

    if (msg.author.id === user.id) {
      return msg.channel.send("You can not warn yourself");
    }

    if (user.id === msg.guild.owner.id) {
      return msg.channel.send(
        "You cannot warn the server owner."
      );
    }

    const reason = args.slice(1).join(" ");

    if (!reason) {
      return msg.channel.send(
        "Please provide reason to warn - warn @mention <reason>"
      );
    }

    let warnings = db.get(`warnings_${msg.guild.id}_${user.id}`);

    if (warnings === null) {
      db.set(`warnings_${msg.guild.id}_${user.id}`, 1);
      user.send(
        `You have been warned in **${msg.guild.name}** for ${reason}`
      );
     msg.channel.send(
        `You warned **${
          msg.mentions.users.first().tag
        }** for ${reason}`);
      const loggingChannelId = db.get(`loggingChannel_${msg.guild.id}`)
    if(loggingChannelId == "none") return
    const loggingChannel = client.channels.cache.get(loggingChannelId)
    loggingChannel.send(`${msg.author.tag} warned ${user.tag} for ${reason}`)
    }
};