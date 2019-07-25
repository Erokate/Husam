const Discord = require('discord.js');
const { stripIndents } = require('common-tags');
const slots = ['🍇', '🍊', '🍐', '🍒', '🍋'];

exports.run = function(client, message) {

	var slot1 = slots[Math.floor(Math.random() * slots.length)];
	var slot2 = slots[Math.floor(Math.random() * slots.length)];
	var slot3 = slots[Math.floor(Math.random() * slots.length)];
	
	if (slot1 === slot2 && slot1 === slot3) {
		message.channel.send(stripIndents`
		${slot1} : ${slot2} : ${slot3}
		Tebrikler, kazandın!
		`); 
	} else {
		message.channel.send(stripIndents`
		${slot1} : ${slot2} : ${slot3}
		Ow, kaybettin!
		`);	
	}

};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['slot'],
  permLevel: 0
};

exports.help = {
  name: 'slots', 
  description: 'oyun komutu Slots oynatır',
  usage: 'slots'
};