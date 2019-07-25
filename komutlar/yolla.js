const Discord = require('discord.js');

exports.run = (client, message, args) => {

    if (message.author.bot) return;

    mention = message.mentions.users.first();

    if (message.content.toLowerCase ('yolla')) {
        if (mention == null) { return; }
        message.delete();
        mentionMessage = message.content.slice (8);
        mention.sendMessage (mentionMessage);
        message.channel.send ('Yolladım!');
    }
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['send'],
    permLevel: 4
  };
  
  exports.help = {
    name: 'yolla',
    description: 'Etiketlediğin Kişiye Özel Mesaj Gönderir. Botun Sahibi Kullanır...',
    usage: 'yolla @etiket mesajınız'
  };