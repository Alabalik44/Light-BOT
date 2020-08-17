const Discord = require('discord.js');


exports.run = function(client, message) {
 
    const embed = new Discord.RichEmbed()
        .setDescription("**Kerem Çağan Eke**")
        .setImage("https://resmim.net/f/ckojv8.jpg?nocache")
        .setThumbnail("https://resmim.net/f/ckojv8.jpg?nocache")
        .setColor(0x00AE86)
        .addField("Cinsi", "Arizona Kertenkelesi", true)
        .addField("Özellikleri", `
        *kendisi bok böceği gibi yapışkandır ve toygey onu çok sefer onlar bffdir ve birde
   *tam bir corona virüs uyarıcısıdır onu gören virüs olur :smile:
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
  name: 'kerem',
  description: 'kerem hakkında bilgi verir',
  usage: 'kerem'
};