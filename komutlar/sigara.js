const prefix = "*"
exports.run = async (client, message, level) => {
    if (!message.content.startsWith(prefix)) return;

    message.channel.send('**SİGARA YAKTIM**').then(async msg => {
        setTimeout(() => {
            msg.edit('🚬');
        }, 500);
        setTimeout(() => {
            msg.edit('🚬 ☁ ');
        }, 1000);
        setTimeout(() => {
            msg.edit('🚬 ☁☁ ');
        }, 1500);
        setTimeout(() => {
            msg.edit('🚬 ☁☁☁ ');
        }, 2000);
        setTimeout(() => {
            msg.edit('🚬 ☁☁');
        }, 2500);
        setTimeout(() => {
            msg.edit('🚬 ☁');
        }, 3000);
        setTimeout(() => {
            msg.edit('🚬 ');
        }, 3500);
        setTimeout(() => {
            msg.edit(`Aga Bee!`);
        }, 4000);
    });
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['smoke'],
    permLevel: "User"
};

exports.help = {
    name: "sigara",
    description: "Efkar Komutu",
    usage: "sigara"
};