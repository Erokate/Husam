const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

      if(!message.member.hasPermission("ADMINISTRATOR")) return;
      const sayMessage = args.join(" ");
      message.delete().catch();
      message.channel.send(sayMessage);

}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['konuştur, konuş, say'],
  permLevel: 2
};

exports.help = {
  name: 'söylet',
  description: 'Sunucu Sahipleri Bota İstediğini Söyletir.',
  usage: 'söylet (MESAJ)'
};
