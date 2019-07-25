const Discord = require('discord.js');
const generator = require('generate-password');


exports.run = function(client, message, args) {
    var uzunluk = args.slice(0).join(' ');

    if (!uzunluk) return message.reply('__Ow bi sorun var.__ Uzunluk girmemişsiniz. **__Doğru Kullanım:__** *sifrekur <Uzunluk>')



    var password = generator.generate({
        length: uzunluk,
        numbers: true,
    })

    message.channel.send(password);
};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['sk', 'sifre'],
  permLevel: 0 
};

exports.help = {
  name: 'sifrekur', 
  description: 'Rastgele bir şifre oluşturur.',
  usage: 'sifrekur <uzunluk>'
};