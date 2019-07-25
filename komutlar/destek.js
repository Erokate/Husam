const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x64f94b)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Özel mesajlarını kontrol et. :postbox:');
    message.channel.sendEmbed(ozelmesajkontrol) }
	const pingozel = new Discord.RichEmbed()
    .setColor(0xfda006)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('__Desteklediğimiz Sunucular:__ \n **SwercTR:** https://discord.gg/7GfjNWt \n\n  __**Erokate** Discord Sunucusuna Gelmek İçin:__ \n https://discord.gg/B49gWKg \n\n**:copyright: 2018 Erokate**');
    return message.author.sendEmbed(pingozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['desteks', 'dsunucular', 'desteksunucuları'],
  permLevel: 0
};

exports.help = {
  name: 'destek',
  description: 'Desteklediğimiz Sunucuları Gösterir.',
  usage: 'destek'
};
