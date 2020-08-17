const Discord = require("discord.js");

const mapping = {
  " ": "   ",
  "0": "",// Emoji Idlerini Normalde Yapabilirsiniz Hareketlide
  "1": "",
  "2": "",
  "3": "",
  "4": "",
  "5": "",
  "6": "",
  "7": "",
  "8": "",
  "9": "",
  "!": ":grey_exclamation:",
  "?": ":grey_question:",
  "#": ":hash:",
  "*": ":asterisk:"
};

"abcdefghijklmnopqrstuvwxyz".split("").forEach(c => {
  mapping[c] = mapping[c.toUpperCase()] = `:regional_indicator_${c}:`;
});

exports.run = function(client, message, args) {
  let offlinesayi = message.guild.members.filter(
    m => m.user.presence.status === "offline"
  ).size; 
  let offline = '**Çevrimdışı Kişi Sayısı** ' +
     `${offlinesayi}`
     .split("")
     .map(c => mapping[c] || c)
     .join(" ")
  let toplam = message.guild.memberCount;
  let sunucu = '**Sunucudaki Kişi Sayısı:** ' + 
      `${toplam}`
      .split("")
      .map(c => mapping[c] || c)
      .join(" ")
  let onlinesayi = message.guild.members.filter(
    only => only.presence.status != "offline"
  ).size;
  let online = '**Çevrimiçi Kişi Sayısı:** ' +
      `${onlinesayi}`
      .split("")
      .map(c => mapping[c] || c)
      .join("")
const embed = new Discord.RichEmbed()
.setTitle('Medusa Bot Sunucu İstatistikleri')
.setColor('BLACK')
//.addField("Sunucudaki üye sayısı", message.guild.memberCount)
.setDescription('' + sunucu + '\n \n' + online + '\n \n' + offline + '')
.setFooter('Medusa v1.0 #BETA!')
//.(online)
  message.channel.send(embed)
  /*message.channel.send('Online sayısı: ' + 
    `${onlinesayi}`
      .split("")
      .map(c => mapping[c] || c)
      .join(" ")
  );*/
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["onlinesayi"],
  permLevel: 0
};

exports.help = {
  name: "say",
  usage: "Sunucudaki Online Kişileri Sayar",
  desscription: "say"
};
//Sunucudaki üyeleri sayar. 