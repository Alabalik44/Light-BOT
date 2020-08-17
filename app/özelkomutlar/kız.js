const Discord = require('discord.js');

exports.run = async (client, message, args) => {

let kayityetkili = '709750935575855194' //KAYIT YETKİLİSİ ID
let verbuse = '705519838361026622' //VERİLECEK ROL ID
let verbusem = '725032619015667834' //VERİLECEK ROL ID
let albuse = '716106897039818762' //ALINACAK ROL ID
let albusem = '710130330098597978' //ALINACAK ROL ID l Kullanmicaksanız silin
let isimön = '☆' //TAG'İNİZİ GİRİN
let isimson = '' //DEĞİŞTİRİLECEK İSMİN SONUNA GELEN

//TİK İSMİNDE BİR EMOJİNİZ OLMASI LAZIM (Hareketli Olsa Daha Güzel Gözükür)

  if(!message.member.roles.has(kayityetkili))
  if(!message.member.hasPermission("ADMINISTRATOR"))
  return message.channel.send(`Bu komutu kullanabilmek için \`Kayıt\` yetkisine sahip olmasınız.`);
  let member = message.mentions.members.first()
  let isim = args.slice(1).join(" ")
  if (!member) return message.channel.send('Bir Üye Etiketlemelisin 🐍')
  if (!isim) return message.channel.send('Bir İsim Yazmalısın 🐍')

  setTimeout(function(){
  member.setNickname(`${isimön}${isim}${isimson}`)
  },2000)
  setTimeout(function(){
  member.addRole(verbuse)
  member.addRole(verbusem)
  },3000)
  setTimeout(function(){
  member.removeRole(albuse)
  member.removeRole(albusem)
  },4000)

 const emoji = client.emojis.find(emoji => emoji.name === "tik");
 let embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setImage(`https://media.giphy.com/media/vvW9GuxsGM4lcjqypz/giphy.gif`)
  .setDescription(`✅ Kayıt işlemi Başarılı ✅

**Kayıt edilen kullanıcı :** ${isimön}${isim}${isimson}

**Kayıt işleminde verilen rol :** <@&${verbuse}>, <@&${verbusem}>

**Kayıt işleminde alınan rol :** <@&${albuse}>, <@&${albusem}>`) 
   
  
  .setFooter(`Kayıt işlemini yapan yetkili : ${message.author.username}`)
  .setImage("https://media.giphy.com/media/vvW9GuxsGM4lcjqypz/giphy.gif")
message.channel.send(embed)
message.react(emoji)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: 'üğpo',
  description: "kız kullanıcıları kayıt etme komutu.",
  usage: '!üğpo <yeni nick>'
}
