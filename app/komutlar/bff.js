const Discord = require('discord.js');


exports.run = function(client, message) {
 
    const embed = new Discord.RichEmbed()
        .setDescription("**Kerem Çağan Eke ve Muhammet Toygar Coşkun**")
        .setImage("https://resmim.net/f/ckojv8.jpg?nocache")
        .setThumbnail("https://resmim.net/f/ckojv8.jpg?nocache")
        .setColor(0x00AE86)
        .addField("Arkadaşlık Türü", "BFF", true)
        .addField("Kişiler", `
        *Kerem ve Toygey
   *Özellikleri Birbirlerini cok seviyolarrr
   `, true)

   message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'bff',
  description: 'kerem hakkında bilgi verir',
  usage: 'bestfrends'
};