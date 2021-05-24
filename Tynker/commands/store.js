const Discord = require('discord.js')
const db = require('quick.db')

exports.run = (client, msg, args) => {
    let embed = new Discord.MessageEmbed()
    .addField("**VIP Ranks** Bronze: 3500 Coins", "[<YourPrefix>buy bronze]") 
    .addField("Fresh Nikes: $600", `[<YourPrefix>buy nikes]`)
    .addField("Car: $800", "[<YourPrefix>buy car]")
    .addField("Mansion: $1200", "<YourPrefix>buy mansion]")
    .setColor("BLUE")
    msg.channel.send(embed)
}