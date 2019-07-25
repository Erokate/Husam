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
    .setDescription('**Yapımcı İsmi:** \n\ Yiğit Eren Güner \n\n\ **Discord Tagı:** \n\ Erokate#9848 \n\n\ **Erokate Discord Sunucusuna Gelmek İçin:** \n\ https://discord.gg/B49gWKg \n\n**:copyright: 2018 Erokate**');
    return message.author.sendEmbed(pingozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yb', 'yapımcıb', 'ybilgi'],
  permLevel: 0
};

exports.help = {
  name: 'yapımcıbilgi',
  description: 'Botun Yapımcısı Hakkında bilgi verir.',
  usage: 'yapımcıbilgi'
};
