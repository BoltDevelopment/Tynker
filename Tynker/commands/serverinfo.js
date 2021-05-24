const { MessageEmbed } = require('discord.js');

const moment = require('moment');

const filterLevels = {

	DISABLED: 'Off',

	MEMBERS_WITHOUT_ROLES: 'No Role',

	ALL_MEMBERS: 'Everyone'

};

const verificationLevels = {

	NONE: 'None',

	LOW: 'Low',

	MEDIUM: 'Medium',

	HIGH: '(╯°□°）╯︵ ┻━┻',

	VERY_HIGH: '┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻'

};

const regions = {

	brazil: 'Brazil',

	europe: 'Europe',

	hongkong: 'Hong Kong',

	india: 'India',

	japan: 'Japan',

	russia: 'Russia',

	singapore: 'Singapore',

	southafrica: 'South Africa',

	sydeny: 'Sydeny',

	'us-central': 'US Central',

	'us-east': 'US East',

	'us-west': 'US West',

	'us-south': 'US South'

};

exports.run = (client, msg, args) => {

		const roles = msg.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());

		const members = msg.guild.members.cache;

		const channels = msg.guild.channels.cache;

		const emojis = msg.guild.emojis.cache;

		const embed = new MessageEmbed()

			.setDescription(`**Guild information for __${msg.guild.name}__**`)

			.setColor('BLUE')

			.setThumbnail(msg.guild.iconURL({ dynamic: true }))

			.addField('General', [

				`**❯ Name:** ${msg.guild.name}`,

				`**❯ ID:** ${msg.guild.id}`,

				`**❯ Owner:** ${msg.guild.owner.user.tag} (${msg.guild.ownerID})`,

				`**❯ Region:** ${regions[msg.guild.region]}`,

				`**❯ Boost Tier:** ${msg.guild.premiumTier ? `Tier ${msg.guild.premiumTier}` : 'None'}`,

				`**❯ Explicit Filter:** ${filterLevels[msg.guild.explicitContentFilter]}`,

				`**❯ Verification Level:** ${verificationLevels[msg.guild.verificationLevel]}`,

				`**❯ Time Created:** ${moment(msg.guild.createdTimestamp).format('LT')} ${moment(msg.guild.createdTimestamp).format('LL')} ${moment(msg.guild.createdTimestamp).fromNow()}`,

				'\u200b'

			])

			.addField('Statistics', [

				`**❯ Role Count:** ${roles.length}`,

				`**❯ Emoji Count:** ${emojis.size}`,

				`**❯ Regular Emoji Count:** ${emojis.filter(emoji => !emoji.animated).size}`,

				`**❯ Animated Emoji Count:** ${emojis.filter(emoji => emoji.animated).size}`,

				`**❯ Member Count:** ${msg.guild.memberCount}`,

				`**❯ Humans:** ${members.filter(member => !member.user.bot).size}`,

				`**❯ Bots:** ${members.filter(member => member.user.bot).size}`,

				`**❯ Text Channels:** ${channels.filter(channel => channel.type === 'text').size}`,

				`**❯ Voice Channels:** ${channels.filter(channel => channel.type === 'voice').size}`,

				`**❯ Boost Count:** ${msg.guild.premiumSubscriptionCount || '0'}`,

				'\u200b'

			])

			.addField('Presence', [

				`**❯ Online:** ${members.filter(member => member.presence.status === 'online').size}`,

				`**❯ Idle:** ${members.filter(member => member.presence.status === 'idle').size}`,

				`**❯ Do Not Disturb:** ${members.filter(member => member.presence.status === 'dnd').size}`,

				`**❯ Offline:** ${members.filter(member => member.presence.status === 'offline').size}`,

				'\u200b'

			])

			.setTimestamp();

		msg.channel.send(embed);

	};