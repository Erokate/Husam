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
    .setAuthor(message.author.username + ': SwercTR Sunucusuna Gelmek İstiyorum :)')
    .setColor('RANDOM')
    .setTimestamp()
    .setDescription('**Madem Öyle Eğlence Dolu SwercTR Sunucusunun Linki :D :** https://discord.gg/sGaqPts ')
        .setImage(`http://resimag.com/p1/80041df81c9.png`)
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
  name: 'swerctr',
  description: ' SwercTR <3',
  usage: 'swerctr'
};