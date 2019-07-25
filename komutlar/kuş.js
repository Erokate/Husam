const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**','Sunucuya Girip Komutu Kullanabilirsin')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor(message.author.username +  ' Bu Kuş Çok Tatlı!')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
        .setImage(`https://media.giphy.com/media/SQ1nUXwCpki4g/giphy.gif`)
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kuş'],
  permLevel: 0
};

exports.help = {
  name: 'kuş',
  description: 'Kuş Gönderir.',
  usage: 'kuş'
};
