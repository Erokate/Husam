const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No.");
  if(!args[0]) return message.channel.send("no");
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`Tam ${args[0]} mesaj sildim.`).then(msg => msg.delete(2000));
});

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sil'],
  permLevel: 0
};

exports.help = {
  name: 'temizle',
  description: '100 Mesaja Kadar İstediğiniz Miktarda Mesaj Siler.',
  usage: 'temizle (1-100)'
};
