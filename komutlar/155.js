const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');


exports.run = (client, message, params) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**','Sunucuya Girip Komutu Kullanabilirsin')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor(message.author.username + ': Türk Polisi <3')
    .setColor('RANDOM')
    .setTimestamp()
    .setDescription('')
        .setImage(`http://resimag.com/p1/ce0755eb64.jpeg`)
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: '155',
  description: 'Türk Polisi',
  usage: '155'
};