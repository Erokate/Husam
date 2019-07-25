const Discord = require('discord.js');


exports.run = function(client, message, args) {

	var öneri = args.slice(0).join(' ');
	var guildID = "501786354762383361";
	var channelID = "501786812281389056";
	
	if (!öneri){
		return message.reply('__Ow bi sorun var.__ Mesajınızı girmemişsiniz. **__Doğru kullanım:__** *öneri <Öneriniz>');
	} else {
		
		var embed = new Discord.RichEmbed()
			.setTimestamp()
			.addField("Kullanıcı:", message.author.tag)
			.addField("ID", message.author.id)
			.addField("Öneri", öneri)
		
		client.guilds.get(guildID).channels.get(channelID).send(embed);
		message.channel.send("Öneri İçin Teşekkürler! Umarım Öneriniz Gerçekleşir. :smile:");
	};


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["öner"], 
  permLevel: 0 
};

exports.help = {
  name: 'öneri', 
  description: "Botun Sahibine Öneri Sunun", 
  usage: 'öneri <mesaj>' 
};