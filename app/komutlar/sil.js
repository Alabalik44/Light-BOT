const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = function(client, message, args) {
  
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`Bu komutu kullanabilmek için **Mesajları Yönet** iznine sahip olmalısın!`);
  
if(isNaN(args[0])) return message.channel.send(`Kelime mi silecem amk`)
  
if (args[0] < 1) return message.reply("1'den az mesaj silemem!")
if (args[0] > 100) return message.reply("100 adet mesaj silemem!")
  
message.channel.bulkDelete(args[0]).then(deletedMessages => {
if (deletedMessages.size < 1) return message.reply("14 Günden Önceki Mesajları Silemem!");
})
message.channel.send(`${args[0]} adet mesaj uzaya fırlatıldı`).then(msg => {
    msg.delete(5000)
})

};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sil',
  description: 'Belirttiğiniz kadar mesajı uzaya yollar.',
  usage: 'sil'
};