exports.run = async(client, message, args, distube) => {
distube.resume(message);
message.channel.send("Resumed the music!");
}