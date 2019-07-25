const Discord = require('discord.js');
exports.run = function(client, message, args) {
  message.channel.sendMessage('**' + client.ping + '** ms');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['botping', 'kacms'],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Botun pingini gösterir.',
  usage: 'ping'
};
