exports.run = async (client, message, args) => {
  if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('You need Manage Messages perms to use this command.')
  if(!args[0]) return message.channel.send('Please provide a question to start a poll!')
    const pollTopic = await message.channel.send(`:bar_chart: **| ${message.author.tag}** asks: ` + args.join(' '));
    pollTopic.react(`<:upvote:817963494926319657>`);
    pollTopic.react(`<:downvote:817963499006591017>`);
  message.delete();
}
