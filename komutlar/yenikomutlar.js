const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {

    if (message.channel.type !== 'dm') {
        const yenikomutlar = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTimestamp()
        .setAuthor(' ')
        .addField('**Yeni Komutların Listesi**', 'Tüm Komutları Görmek İstiyorsan *yardım Yaz')
        .addBlankField()
        .addField('Komut 1:', '**Yolla Komutu.** Botun Özel Mesaj Atmasını Sağlar.')
        .addField('Komut 1 Diğer:', '**Send**')
        .addBlankField()
        .addField('Komut 2:', '**Öneri Komutu.** Bota Öneri Sunun')
        .addField('Komut 2 Diğer:', '**Öner**')
        .addBlankField()
        .addField('Komut 3:', '**Slots Komutu.** Slot Çevirir. Üç Meyve Yan Yana Gelirse Kazanırsın.')
        .addField('Komut 3 Diğer:', ' **Slot**')
        .addBlankField()
        .addField('Komut 4:', '**Şifrekur Komutu.** Bot İsteiğiniz Uzunlukta Şifre Kuracaktır.')
        .addField('Komut 4 Diğer:', '**SK, Sifre**')
        .addBlankField()
        .addField('Komut 5:', '**Hüsam Komutu.** Hüsamın Fotoğrafını Atar.')
        .addField('Komut 5 Diğer:', 'YOK')
        .addBlankField()
        .addField('Komut 6:', '**Sunucuresmi Komutu** Sunucunuzun Resmini Gösterir.')
        .addField('Komut 6 Diğer:', 'SR')
        .addBlankField()
        .addField('Komut 7:', '**Hesapla Komutu.** Her Türlü Matematik İşlemini Çözer')
        .addField('Komut 7 Diğer:', 'YOK')
        .addBlankField()
        .addField('Komut 8:', '**Hata.** Botta Bir Hata Varsa Bu Komutla Bot Sahibine Bildirin.')
        .addField('Komut 8 Diğer:', '**Hatabildir**')
        .addBlankField()
        .addField('Daha Komut mu Eklensin?', 'Öneri Komutuyla Bize Komut Öner!')
        console.log("Yeni Komutlar " + message.author.username + "Tarafından Kullanıldı")
        return message.channel.sendEmbed(yenikomutlar);
    }
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['yk', 'haberler'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'yenikomutlar',
    description: 'Yeni komutlar hakkında bilgi verir.',
    usage: 'yenikomutlar'
  };
