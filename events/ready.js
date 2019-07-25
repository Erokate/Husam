const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${client.user.username}: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("streaming");
  function changing_status() {
    let status = ["Hüsam Bot Tekrardan Aktif! 🎉", "İnstagram: @kushusam", "🎉 6 Yeni Komut: Bu Komutları Öğrenmek İçin *yk yaz. 🎉", `${ayarlar.prefix}yardım ya da ${ayarlar.prefix}help Yazarak Komut Listesine Ulaşabilirsin!`, "🎉 Hüsam Bot Discord Sunucusuna Katılmak İçin discord.io/HUSAM 🎉", "🎉 Erokate Discord Sunucusuna Katılmak İçin discord.io/EROKATE 🎉", `🎉 ${ayarlar.prefix}swerctr Komutu Güncellendi!🎉`, `🎉 SwercTR Discord Botu Yapımda ${ayarlar.prefix}swerctr Yazıp Sunucuya Gelmeyi Unutmayın! 🎉`, `✨Artık Botumuz 7/24 Aktif!!✨`, `🎉Artık Botumuz 7/24 Aktif!!🎉`, `🎊Artık Botumuz 7/24 Aktif!!🎊`, `🎈Artık Botumuz 7/24 Aktif!!🎈`, ]
    let randomStatus = status[Math.floor(Math.random() * status.length)]
    client.user.setActivity(randomStatus, {type: 'STREAMING'});
  }
  setInterval(changing_status, 10000)
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${client.user.username}: Oyun ismi ayarlandı!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${client.user.username}: Şu an ` + client.channels.size + ` adet kanala, ` + client.guilds.size + ` adet sunucuya ve ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullanıcıya hizmet veriliyor!`);
};
