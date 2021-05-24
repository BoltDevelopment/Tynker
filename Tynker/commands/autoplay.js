exports.run = async (client, message, args, distube) => {
  let mode = distube.toggleAutoplay(message);
  message.channel.send("Set autoplay mode to `" + (mode ? "On" : "Off") + "`");
}