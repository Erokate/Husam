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
    .setAuthor(message.author.username + ': Reklam yapıyorum :)')
    .setColor('RANDOM')
    .setTimestamp()
    .setDescription('**Reklam Yaptığın İçin Teşekkürler ^o^:** \n https://discord.gg/7GfjNWt \n\n **© 2018 Erokate**')
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
  name: 'reklamyap',
  description: 'Sunucunuzda Reklam Yapar.',
  usage: 'reklamyap'
};
