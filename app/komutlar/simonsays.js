  
const Discord = require('discord.js');

exports.run = async(client, message, args) => {
  
message.delete()
  
let onlycode = args.slice(0).join(' ');
if (!onlycode) return message.channel.send('Simon\'un Mesajını Söylemesi İçin Mesaj Yazman Gerek!')
  
const onlysimon = new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription(`**Simon Diyorki:**\n${onlycode}`)
.setThumbnail(`https://i.hizliresim.com/h811hf.png`)
message.channel.send(onlysimon)}

exports.conf = {
enabled: true,  
guildOnly: false, 
aliases: [], 
permLevel: 0 
};

exports.help = {
  name: 'simonsays komutu ile simona bir mesaj yazdırırsınız.' 
};