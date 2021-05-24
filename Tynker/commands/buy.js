const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (client, msg, args) => {
  let prefix = db.get(`prefix_${msg.guild.id}`)
  if(prefix === null) prefix = "$"
  if(!args[0]) return msg.channel.send(new Discord.MessageEmbed()
    .setColor("RED")
    .setDescription(`<:xmark:805308855844208660> Provide what you want to buy. Use \`${prefix}store\` to view products`)
    );
    let user = msg.author;
    
  let verified = db.get(`verified_${msg.guild.id}_${msg.author.id}`)

    let author = db.get(`money_${msg.guild.id}_${user.id}`)

    let Embed = new Discord.MessageEmbed()
    .setColor("RED")
    .setDescription(`<:xmark:805308855844208660> You need 2000 coins to purchase Bronze VIP`);

    if (args[0] == 'bronze') {
        if (author < 3500) return msg.channel.send(Embed)
        
        db.get(`bronze_${msg.guild.id}_${user.id}`);
        db.set(`bronze_${msg.guild.id}_${user.id}`, true)

        let Embed2 = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setDescription(`<:check:805308822368813086> Purchased Bronze VIP For 3500 Coins`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 3500)
        msg.channel.send(Embed2)
    } else if(args[0] == 'nikes') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription(`<:xmark:805308855844208660> You need 600 coins to purchase some Nikes`);

        if (author < 600) return msg.channel.send(Embed2)
       
        db.get(`nikes_${msg.guild.id}_${user.id}`)
        db.add(`nikes_${msg.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setDescription(`<:check:805308822368813086> Purchased Fresh Nikes For 600 Coins`);

        db.subtract(`money_${msg.guild.id}_${user.id}`, 600)
        msg.channel.send(Embed3)
    } else if(args[0] == 'car') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription(`<:xmark:805308855844208660> You need 800 coins to purchase a new car`);

        if (author < 800) return msg.channel.send(Embed2)
       
        db.get(`car_${msg.guild.id}_${user.id}`)
        db.add(`car_${msg.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setDescription(`<:check:805308822368813086> Purchased a New Car For 800 Coins`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 800)
        msg.channel.send(Embed3)
    } else if(args[0] == 'mansion') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription(`<:xmark:805308855844208660> You need 1200 coins to purchase a Mansion`);

        if (author < 1200) return msg.channel.send(Embed2)
       
        db.get(`house_${msg.guild.id}_${user.id}`)
        db.add(`house_${msg.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setDescription(`<:check:805308822368813086> Purchased a Mansion For 1200 Coins`);

        db.subtract(`money_${msg.guild.id}_${user.id}`, 1200)
        msg.channel.send(Embed3)
    }
  }
