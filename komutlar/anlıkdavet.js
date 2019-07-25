const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Reklam Komutları Özel Mesajlarda Kullanılamaz!**','Sunucuya Girip Komutu Kullanabilirsin')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor(message.author.username + ' Hüsam Bot Discord Anlık Davet İstedi. Teşekkürler :)')
    .setColor('RANDOM')
    .setTimestamp()
    .setDescription('**Hüsam Bot Discord Sunucusunun Linki:** https://discord.gg/7GfjNWt ')
        .setImage(`http://resimag.com/p1/ae3fc3d84f0.png`)
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['hüsamdc', 'hüsambotdiscord', 'botsunucu'],
  permLevel: 0
};

exports.help = {
  name: 'anlıkdavet',
  description: ' Hüsam Bot Discord <3',
  usage: 'anlıkdavet'
};