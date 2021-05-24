const Discord = require('discord.js')
const db = require('quick.db')

exports.run = (client, msg, args) => {
    
    let user = msg.author;

let prefix = db.get(`prefix_${msg.guild.id}`)
if(prefix === null) prefix = "$"
  let verified = db.get(`verified_${msg.guild.id}_${msg.author.id}`)

    if(args[0] == 'nikes') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription(`<:xmark:805308855844208660> You don't have Nikes to sell`);

        let nikeses = db.fetch(`nikes_${msg.guild.id}_${user.id}`)

        if (nikeses < 1) return msg.channel.send(Embed2)
       
        db.fetch(`nikes_${msg.guild.id}_${user.id}`)
        db.subtract(`nikes_${msg.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setDescription(`<:check:805308822368813086> Sold Fresh Nikes For 600 Coins`);

        db.add(`money_${msg.guild.id}_${user.id}`, 600)
        msg.channel.send(Embed3)
    } else if(args[0] == 'car') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription(`<:xmark:805308855844208660> You don't have a Car to sell`);

       let cars = db.fetch(`car_${msg.guild.id}_${user.id}`)

        if (cars < 1) return msg.channel.send(Embed2)
       
        db.fetch(`car_${msg.guild.id}_${user.id}`)
        db.subtract(`car_${msg.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setDescription(`<:check:805308822368813086> Sold a Car For 800 Coins`);

        db.add(`money_${msg.guild.id}_${user.id}`, 800)
        msg.channel.send(Embed3)
    } else if(args[0] == 'mansion') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription(`<:xmark:805308855844208660> You don't have a Mansion to sell`);

        let houses = db.fetch(`house_${msg.guild.id}_${user.id}`)

        if (houses < 1) return msg.channel.send(Embed2)
       
        db.fetch(`house_${msg.guild.id}_${user.id}`)
        db.subtract(`house_${msg.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setDescription(`<:check:805308822368813086> Sold a Mansion For 1200 Coins`);

        db.add(`money_${msg.guild.id}_${user.id}`, 1200)
        msg.channel.send(Embed3)
      }
    };
