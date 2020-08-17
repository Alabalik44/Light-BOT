const Discord = require('discord.js');

exports.run = (client, message, args) => {
 let onlycode = args[0]
 let codeonly = args.join(`+`)
 
if(!onlycode) return message.channel.send(`Bir yazı yazmalısın. \`yazı-yaz <yazı>\``)
 const embed = new Discord.RichEmbed()
  .setColor('GREEN')
  .setDescription('Resmin başarıyla oluşturuldu.')
  .setImage(`https://flamingtext.com/net-fu/proxy_form.cgi?script=fluffy-logo&text=${codeonly}&_loc=generate&imageoutput=true`) 
message.channel.send(embed)
};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0
};

exports.help = {
 name: 'pp',
 description: 'Yazı yazar.',
 usage: 'yaz <yazı>'
};