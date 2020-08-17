const Discord = require('discord.js')
exports.run = (client, message, args) => {
 
  message.channel.send(
    new Discord.RichEmbed()
      .setColor('#000000')
      .setTitle(`Davet Etmek İçin Tıkla`)
      .setURL(`https://discord.com/oauth2/authorize?client_id=726211517648863274&scope=bot&permissions=805829694`)
     .setFooter(`Sunucun Şimdiden Güzelleşti`)
)
 
}
 
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}
 
exports.help = {
  name: 'davet',
  description: "Sunucunuza botu davet etmek için bu komutu kullanın."
}