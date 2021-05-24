const db = require("quick.db");

exports.run = (client, msg, args) => {
    const user = msg.mentions.members.first() || msg.author;

    let warnings = db.get(`warnings_${msg.guild.id}_${user.id}`);

    if (warnings === null) warnings = 0;

    msg.channel.send(`${user.tag} have **${warnings}** warning(s)`);
};