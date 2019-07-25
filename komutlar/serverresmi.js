const Discord = require('discord.js');


exports.run = function(client, message) {

    const embed = new Discord.RichEmbed()
        .setDescription("**SUNUCUNUN RESMİ**")
        .setImage(message.guild.iconURL)

    message.channel.send(embed);

};

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['sr'],
  permLevel: 0 
};

exports.help = {
  name: 'sunucuresmi', 
  description: 'Sunucunun resmini gösterir',
  usage: 'sunucuresmi'
};