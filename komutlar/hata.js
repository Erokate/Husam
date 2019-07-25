const Discord = require('discord.js');


exports.run = function(client, message, args) {

	var hata = args.slice(0).join(' ');
	var guildID = "501786354762383361";
	var channelID = "603902762568384532";
	
	if (!hata){
		return message.reply('__Ow bi sorun var.__ Mesajınızı girmemişsiniz. **__Doğru kullanım:__** *hata <mesaj>');
	} else {
		
		var embed = new Discord.RichEmbed()
			.setTimestamp()
			.addField("Kullanıcı:", message.author.tag)
			.addField("ID", message.author.id)
			.addField("Hata", hata)
		
		client.guilds.get(guildID).channels.get(channelID).send(embed);
		message.channel.send("Geri Bildiriminiz İçin Teşekkürler. :smile:");
	};


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["hatabildir"], 
  permLevel: 0 
};

exports.help = {
  name: 'hata', 
  description: "Botun Sahibine Hata Ihbar Edin", 
  usage: 'hata <mesaj>' 
};
