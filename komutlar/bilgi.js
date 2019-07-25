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
    .setDescription(' \n\n\_**Yapımcı:**_\n\ Yiğit Eren Güner **Erokate**\n\n_**BOTU EKLEMEK İÇİN LİNK:**_\n\ https://discordapp.com/oauth2/authorize?client_id=501811506795642893&scope=bot&permissions=2146958847 \n\n **Hüsam Bot Rainbowu Sunucunuza Eklemek İçin:** https://discordapp.com/oauth2/authorize?client_id=540264906059022359&scope=bot&permissions=0 \n\n_**Hüsam Bot Discord Sunucusuna Gelmek İçin**_\n\ https://discord.gg/7GfjNWt \n\n\_**Erokate Sunucusuna Katılmak İçin**_\n\ https://discord.gg/B49gWKg \n\n**:copyright: 2018 Erokate**');
    return message.author.sendEmbed(pingozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot bilgi', 'botbilgi', 'bb', 'botb', 'bbot', 'hakkında', 'bot hakkında', 'bothakkında'],
  permLevel: 0
};

exports.help = {
  name: 'bilgi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};
