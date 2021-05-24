exports.run = async(client, message, args, distube) => {
distube.stop(message);
message.channel.send("Stopped the music!");
}