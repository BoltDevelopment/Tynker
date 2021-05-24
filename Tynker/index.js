const Discord = require("discord.js");
const  client = new Discord.Client({
  disableEveryone: true,
  partials: ['CHANNEL', 'MESSAGE', 'GUILD_MEMBER', 'REACTION']
});
const fs = require('fs');
const config = require("./config.js");
const db = require("quick.db")

const DisTube = require('distube')
const distube = new DisTube(client, { searchSongs: true, emitNewSongOnly: true });

const express = require("express");
const app = express()

const invites = {};
const wait = require('util').promisify(setTimeout);


const resolve = require("resolve")
const port = 3000

const status = (queue) => `Volume: \`${queue.volume}%\` | Filter: \`${queue.filter || "Off"}\` | Loop: \`${queue.repeatMode ? queue.repeatMode == 2 ? "All Queue" : "This Song" : "Off"}\` | Autoplay: \`${queue.autoplay ? "Off" : "On"}\``;


var commandlist = []
fs.readdir('./commands/', (err, files) => {
    if(err){
        return console.log('An error occured when checking the commands folder for commands to load: ' + err);
    }
    files.forEach((file) => {
        if(!file.endsWith('.js')) return;
        var commandFile = require(`./commands/${file}`);
        commandlist.push({
            file: commandFile,
            name: file.split('.')[0]
        });
    });
});

distube.on("playSong", (message, queue, song) => message.channel.send(new Discord.MessageEmbed()
    .setTitle(`Now Playing - ${song.name}`)
    .setURL(song.url)
    .setFooter(`Added By: ${message.author.tag}`, message.author.avatarURL({dynamic: true}))
    .setImage(song.thumbnail)
    ))
    distube.on("addSong", (message, queue, song) => message.channel.send(new Discord.MessageEmbed()
    .setTitle(`Song Added To Queue - ${song.name}`)
    .setURL(song.url)
    .setImage(song.thumbnail)
    .setFooter(`Added By: ${message.author.tag}`, message.author.avatarURL({dynamic: true}))
    ))
    distube.on("playList", (message, queue, playlist, song) => message.channel.send(
        `Play \`${playlist.name}\` playlist (${playlist.songs.length} songs).\nRequested by: ${song.user}\nNow playing \`${song.name}\` - \`${song.formattedDuration}\`\n${status(queue)}`
    ))
    distube.on("addList", (message, queue, playlist) => message.channel.send(
        `Added \`${playlist.name}\` playlist (${playlist.songs.length} songs) to queue\n${status(queue)}`
    ))
    // DisTubeOptions.searchSongs = true
    distube.on("searchResult", (message, result) => {
        var i = 0;
        message.channel.send(new Discord.MessageEmbed()
        .setDescription(`**Choose an option from below**\n${result.map(song => `**${++i}** • [${song.name}](${song.url}) - \`${song.formattedDuration}\``).join("\n")}\n*Enter anything else or wait 60 seconds to cancel*`)
        .setColor("BLUE")
        .setAuthor(message.guild.name, message.guild.iconURL()))
    })
  
    distube.on("searchCancel", (message) => message.channel.send(`Searching canceled`))
    distube.on("error", (message, e) => {
        console.error(e)
        message.channel.send("An error encountered: " + e);
})

app.listen(port, () => {
    console.log(`Web Server Ready.`)
  });
  app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Page Not Found')
})
  app.get('/', (req, res) => {
    res.setHeader('content-type', 'text/code');
    if(!client.user) return res.status(500).send(`Loading Bot Info..`)
    res.send(`Bot Name: ${client.user.tag} • Bot Id: ${client.user.id} • Server Count: ${client.guilds.cache.size} • Site Is Note Done`)
    console.log('Home URL used')
    if(req.query.ref) {
      console.log('with ref code: ' + req.query.ref)
    }
  })
  app.get('/support', (req, res) => {
    console.log('Support URL used')
    if(req.query.ref) {
      console.log('with ref code: ' + req.query.ref)
    }
    res.redirect('https://discord.gg/cFvUY2vjx6')
  })
  app.get('/vote', (req, res) => {
    console.log('Vote URL used')
    if(req.query.ref) {
      console.log('with ref code: ' + req.query.ref)
    }
    res.redirect('https://top.gg/bot/822526220885032993/vote')
  })
  app.get('/invite', (req, res) => {
    console.log('Invite URL used')
    if(req.query.ref) {
      console.log('with ref code: ' + req.query.ref)
    }
    res.redirect(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=0&scope=bot`)
  })
  app.get("/guilds", (req, res) => {
    res.setHeader('content-type', 'text/plain');
    var serverArray = []
    client.guilds.cache.forEach((item, index)=>{
  serverArray.push(item.name);
})
    res.send(serverArray.join(' • '))
  });

//require("./dashboard/server.js")

client.on('message', (message) => {
  if(message.channel.type == "dm") return message.author.send(`Hey there, I am ${client.user.username}. My default prefix is \`\$\`, but that can be changed.`)
  if(!message.guild) return;
  if(db.get(`autoPublish_${message.guild.id}`) == true) {
    if(message.channel.type == "news") {
      message.crosspost()
    }
  } 
  var prefix = db.get(`prefix_${message.guild.id}`);
    if(prefix === null) prefix = "$";
const escapeRegex = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(prefix)})\\s*`);

    if(!prefixRegex.test(message.content)) return;

    const [, matchedPrefix] = message.content.match(prefixRegex);

   
    var user = message.author
 var xp = db.get(`xp_${message.guild.id}_${message.author.id}`)
if (db.get(`xp_${message.guild.id}_${message.author.id}`) === null) xp = 0
var requiredXP = db.get(`requiredXP_${message.guild.id}_${message.author.id}`)
if (requiredXP === null) requiredXP = 100
var bal = db.get(`money_${message.guild.id}_${message.author.id}`);
if (bal === null) bal = 0
if(message.author.bot) return;
if(!message.content.startsWith(matchedPrefix)) return;


if (xp >= requiredXP) {
  db.add(`requiredXP_${message.guild.id}_${message.author.id}`, 100)
db.add(`level_${message.guild.id}_${message.author.id}`, 1)
var level = db.get(`level_${message.guild.id}_${message.author.id}`)
message.channel.send(`Congrats! 🎉 \`${message.author.tag}\` for reaching level \`${level}\``)
}
  
const args = message.content.slice(matchedPrefix.length).split(' ');
const commandName = args.shift()

const command = commandlist.findIndex((cmd) => cmd.name === commandName);
if(command == -1) return;
if(command.length = 0) return;


commandlist[command].file.run(client, message, args, distube, commandName);
db.add(`xp_${message.guild.id}_${message.author.id}`, Math.floor(Math.random() * (5 - 1)) + 1)

})


client.on('guildCreate', async (guild) => {
  try {
    var server = client.guilds.cache.get(config.servers.main)
db.set(`autoPublish_${guild.id}`, false)
  db.set(`suggestionChannel_${guild.id}`, 'none')
    let guildCreateChannel = client.channels.cache.get(config.channels.botLogs);
    var currentPrefix = db.get(`prefix_${guild.id}`);
    if(currentPrefix == null) currentPrefix = '$'
    var systemChannel = guild.channels.cache.get(guild.systemChannelID);
    if(systemChannel) {
    var embed = new Discord.MessageEmbed()
      .setAuthor(client.user.tag, client.user.avatarURL())
      .setTitle(`Thanks for adding ${client.user.tag} to your server!`)
    .setDescription(`Use \`${currentPrefix}help\` for more information`)
    .setThumbnail(guild.iconURL({dynamic: true}))
    .setTimestamp()
    systemChannel.send(embed)
    } 4545
    var embed = new Discord.MessageEmbed()
      .setAuthor(client.user.tag, client.user.avatarURL())
      .setTitle(`Server Add`)
    .setDescription(`Bot has been added to **${guild.name}** (${guild.id})`)
    .setColor('BLUE')
    .setTimestamp()
    .setFooter(server.name, server.iconURL({dynamic: true}))
    guildCreateChannel.send(embed)
    } catch(e) {console.log(e)}
})
client.on('guildDelete', (guild) => {
  try {
    let guildDeleteChannel = client.channels.cache.get(config.channels.botLogs);
    var server = client.guilds.cache.get(config.servers.main)
    guildDeleteChannel.send(new Discord.MessageEmbed()
      .setAuthor(client.user.tag, client.user.avatarURL())
      .setTitle(`Server Remove`)
      .setColor('RED')
    .setDescription(`Bot has been removed from **${guild.name}** (${guild.id})`)
    .setThumbnail(guild.iconURL({dynamic: true}))
    .setTimestamp()
    .setFooter(server.name, server.iconURL({dynamic: true}))
    )
    } catch(e) {console.log(e)}
})
client.on('channelDelete', (channel) => {
  if(channel == db.get(`loggingChannel_${channel.guild}`)) {
    db.set(`loggingChannel_${channel.id}`, 'none')
  }
  if(channel == db.get(`suggestionChannel_${channel.guild}`)) {
    db.set(`suggestionChannel_${channel.id}`, 'none')
  }
})
client.on('ready', async () => {
  console.log(`Ready • ${client.user.tag} • ${client.user.id}`);
  client.generateInvite({
  permissions: ['ADMINISTRATOR'],
})
  .then(link => console.log(`Generated bot invite link: ${link}`))
  const user = client.user;
  setInterval(() => {
    const statuses = [
        `${client.guilds.cache.size} servers!`,
        `for $help`,
        `for new messages`,
    ]

    const status = statuses[Math.floor(Math.random() * statuses.length)]
    client.user.setActivity(status, { type: "WATCHING"})
}, 20000)
  
  
  const channel = config.channels.botLogs;
  const prettyMilliseconds = require("pretty-ms")
  const bot = client.user;
  const server = client.guilds.cache.get(config.servers.main)
  let memberSize = 0
  client.users.cache.forEach((item) => {
    if(!item.bot) {
      memberSize = memberSize + 1
    }
  })
  const embed = new Discord.MessageEmbed()
  .setColor("GREEN")
  .setAuthor(client.user.tag, client.user.displayAvatarURL())
  .setURL('https://www.tynker.tk/invite?ref=ready-status')
  .setTitle(`Bot is ready, and watching ${memberSize} Members & ${client.guilds.cache.size} Guilds`)
  .setTimestamp()
  .setFooter(server.name, server.iconURL({dynamic: true}))
  
  client.channels.cache.get(channel).send(embed)
})
  
client.login(config.token)