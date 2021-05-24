const Discord = require("discord.js")
const db = require("quick.db");
var root = require('rootrequire');
const config = require(root + '/config.js')
exports.run = (client, msg, args) => {
    let prefix = db.get(`prefix_${msg.guild.id}`);
    if (prefix === null) prefix = '$';
const bottag = client.user.tag
let botavatar = client.user.avatarURL()
   if (args[0] === "commands"){
     const embed = new Discord.MessageEmbed()
     .setAuthor(bottag, botavatar)
     .setThumbnail(botavatar)
     .addField("Misc", "\`ping, test, whois, help, djs, membercount, servericon, serverinfo, github, covid\`", true)
     .addField("Economy", "\`bal, work, dep, with, beg, weekly, store, buy, daily, sell, pay, addmoney, subtractmoney\`", true)
     .addField("Fun", "\`meme, inv, snipe, joke, hug, kiss, triggerd, changemymind\`", true)
      .addField("Fun", "\`meme\` - Sends a random meme from reddit\n\`snipe\` - Sends the last message in the channel if it was deleted\n\`calc <equation>\` - Solves a math equation\n\`joke [@user]\` - Shows the amount of invites that user has\n\`profile [@user]\` - Sends the user's profile\n\`setprefix <prefix>\` - Changes the server's prefix\n\`loggingchannel <set/remove> [#channel>\` - Sets/Removes the logging channel\n\`suggestionchannel <set/remove> [#channel]\` - Sets/Removes the suggestions chanel\n\`autopublish <yes/no>\` - Sets wether messages will publish if the channel is an announcement channel.", false)
     .addField("Utility", "\`settings\` - Shows the server settings\n\`poll <question>\` - Sends a pioll to the channel + adding upvote/downvote reactions\n\`avatar [@user]\` - Sends user's avatar\n\`invites [@user]\` - Shows the amount of invites that user has\n\`profile [@user]\` - Sends the user's profile\n\`setprefix <prefix>\` - Changes the server's prefix\n\`loggingchannel <set/remove> [#channel>\` - Sets/Removes the logging channel\n\`suggestionchannel <set/remove> [#channel]\` - Sets/Removes the suggestions chanel\n\`autopublish <yes/no>\` - Sets wether messages will publish if the channel is an announcement channel \n\ \`announnce <Channel ID> <Message>\` - Send a Announcement Embed \n\ \`giveaway <amount{m/s/d/h/}> <Prize>\` - start a giveaway", false)
    .addField("Moderation", "\`warn <@user> [reason]\` - Warns the user\n\`warnings [@user]\` - Sends the amount of warnings the user has\n\`resetwarns <@user>\` - Removes all warnings from a user\n\`lockdown\` - Locks the channel you are in\n\`slowmode <amount>\` - Changes the channel's slowmode\n\`purge <amount>\` - Purges the amount of messages\n\`mute <@user> <reason>\` - Mutes the specified user\n\`unmute <@user> <reason>\` - Unmutes the specified user", false)
     .addField("Leveling", "\`rank [@user]\` - Shows a users rank\n\`addlevel <@user> <amount>\` - Adds the amount of levels to the specified user\n\`subtractlevel <@user> <amount>\` - Subtracts the amount of levels to the specified user", false)
     .setFooter(`©️ ${bottag}`, botavatar)
     .setTimestamp()
     .setColor("BLUE")
     msg.author.send(embed)
     msg.reply('Sent a message to your dm\'s with all the commands.')
   }
   if (args[0] === "modules"){
     const embed = new Discord.MessageEmbed()
     .setAuthor(bottag, botavatar)
     .setThumbnail(botavatar)
     .setDescription(`To view a modules commands, do \`${prefix}help {module}\``)
     .addField("Modules", "\`misc, economy, fun, utility, moderation, leveling\`", true)
     .setFooter(`©️ ${bottag}`, botavatar)
     .setTimestamp()
     .setColor("BLUE")
     msg.channel.send(embed)
   }
   if(args[0] == "misc"){
     const embed = new Discord.MessageEmbed()
     .setAuthor(bottag, botavatar)
     .setThumbnail(botavatar)
     .addField('Misc', "\`ping, test, whois, help, djs, membercount, servericon, serverinfo, github, covid\`")
     .setFooter(`©️ ${bottag}`, botavatar)
     .setTimestamp()
     .setColor('BLUE')
     msg.channel.send(embed)
   }
   if(args[0] == "economy"){
     const embed = new Discord.MessageEmbed()
     .setAuthor(bottag, botavatar)
     .setThumbnail(botavatar)
     .addField("Economy", "\`bal, work, dep, with, beg, weekly, store, buy, daily, sell, pay, addmoney, subtractmoney\`", true)
     .setFooter(`©️ ${bottag}`, botavatar)
     .setTimestamp()
     .setColor('BLUE')
     msg.channel.send(embed)
   }
   if(args[0] == "fun"){
     const embed = new Discord.MessageEmbed()
     .setAuthor(bottag, botavatar)
     .setThumbnail(botavatar)
     .addField("Fun", "\`meme, inv, snipe, joke, hug, kiss, triggerd, changemymind\`", true)
     .setFooter(`©️ ${bottag}`, botavatar)
     .setTimestamp()
     .setColor('BLUE')
     msg.channel.send(embed)
   }
   if(args[0] == "utility"){
     const embed = new Discord.MessageEmbed()
     .setAuthor(bottag, botavatar)
     .setThumbnail(botavatar)
.addField("Utility", "\`settings\` - Shows the server settings\n\`poll <question>\` - Sends a pioll to the channel + adding upvote/downvote reactions\n\`avatar [@user]\` - Sends user's avatar\n\`invites [@user]\` - Shows the amount of invites that user has\n\`profile [@user]\` - Sends the user's profile\n\`setprefix <prefix>\` - Changes the server's prefix\n\`loggingchannel <set/remove> [#channel>\` - Sets/Removes the logging channel\n\`suggestionchannel <set/remove> [#channel]\` - Sets/Removes the suggestions chanel\n\`autopublish <yes/no>\` - Sets wether messages will publish if the channel is an announcement channel \n\ \`announce <Channel ID> <Message>\` - Send a Announcement Embed \n\ \`giveaway <amount{s/m/d/h}> <Prize>\` - start a giveaway.", false)
     .setFooter(`©️ ${bottag}`, botavatar)
     .setTimestamp()
     .setColor('BLUE')
     msg.channel.send(embed)
   }
   if(args[0] == "moderation"){
     const embed = new Discord.MessageEmbed()
     .setAuthor(bottag, botavatar)
     .setThumbnail(botavatar)
.addField("Moderation", "\`warn <@user> [reason]\` - Warns the user\n\`warnings [@user]\` - Sends the amount of warnings the user has\n\`resetwarns <@user>\` - Removes all warnings from a user\n\`lockdown\` - Locks the channel you are in\n\`slowmode <amount>\` - Changes the channel's slowmode\n\`purge <amount>\` - Purges the amount of messages\n\`mute <@user> <reason>\` - Mutes the specified user\n\`unmute <@user> <reason>\` - Unmutes the specified user", false)
     .setFooter(`©️ ${bottag}`, botavatar)
     .setTimestamp()
     .setColor('BLUE')
     msg.channel.send(embed)
   }
   if(args[0] == "leveling"){
     const embed = new Discord.MessageEmbed()
     .setAuthor(bottag, botavatar)
     .setThumbnail(botavatar)
     .addField("Leveling", "\`rank [@user]\` - Shows a users rank\n\`addlevel <@user> <amount>\` - Adds the amount of levels to the specified user\n\`subtractlevel <@user> <amount>\` - Subtracts the amount of levels to the specified user", true)
     .setFooter(`©️ ${bottag}`, botavatar)
     .setTimestamp()
     .setColor('BLUE')
     msg.channel.send(embed)
   }
   if (!args[0]){
const helpem = new Discord.MessageEmbed()
    .setAuthor(bottag, botavatar)
    .setThumbnail(botavatar)
    .setTitle('Help has Arrived!')
    .setDescription(`Hey there, thanks for using ${client.user.username}! ${client.user.username} is a multipurpose bot with moderation, utilities, and more! To view all the commands, use \`${prefix}help commands\`, and if you need help, join our support server below!`, true)
    .addField("Key", "\`[]\` = Optional, \`<>\` = Required", false)
    .addField("<:link:822536995746218054> Links",`[Invite Me](${config.inviteURL}) | [Support Server](${config.supportURL}) | [Vote](${config.voteURL})`, false)
    .setFooter(`© ${bottag} 2021`, botavatar)
    .setTimestamp()
    msg.channel.send(helpem)
   }
 }