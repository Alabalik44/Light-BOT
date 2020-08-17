const Discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')
exports.run = async (client, message, args) => {
if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`Bu komutu kullanabilmek için \`Sunucuyu Yönet\` yetkisine sahip olmalısın.`);
let otorol = db.fetch(`otorol_${message.guild.id}`)
let rol = message.mentions.roles.first()
let rolk = message.mentions.channels.first()

if(args[0] && args[0].toLowerCase() === 'sıfırla') {
if(!otorol) return message.channel.send(`Bu sunucuda otorol ayarlanmamış.`)
 db.delete(`otorol_${message.guild.id}`)
 db.delete(`otolog_${message.guild.id}`)
 message.channel.send(`Otorol başarıyla sıfırlandı.`)
 return;
}

if(!rol) return message.channel.send(`Giriş yapanlara verilecek rolü etiketlemelisin.`)
if(!rolk) return message.channel.send(`Rol verilince düşecek logun kanalını etiketlemelisin.`)

db.set(`onlycode.otorol_${message.guild.id}`, rol.id)
db.set(`onlycode.otolog_${message.guild.id}` ,rolk.id)
  
message.channel.send(`Giriş yapanlara verilecek rol \`${rol.name}\`, bildirimin gideceği kanal ise ${rolk} olarak ayarlandı.`)
};
    
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0
};

exports.help = {
 name: 'otorol',
 description: 'Sunucuya giren kullanıcıya seçtiğiniz rolü otomatik verir.',
 usage: 'otorol <@rol>'
};