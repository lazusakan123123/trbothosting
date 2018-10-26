const Discord = require("discord.js");
const moment = require('moment');

module.exports.run = async (bot, message, args) => {
    const duration = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
	
    message.channel.sendCode("Yardım Komutları", `
Komutlar
+8ball <Soru> = Sorununuzu Cevaplar
+sunucubilgi = Sunucu Hakında Bilgi Verir
+bilgi = Bot Hakımda Bilgi Verir
+avatar = Avatarını Gösterir
+ping = Botun Pingini Gösterir
+temizle <sayı> = sohbeti Temizler
+yenilikler = Yenilikler Hakında bilgi Verirt!oylama = Oylama Yapılmasını Sağlar
+kick = Oyuncuyu Kickler
+istatislik = Hakında İstatislikeri Gösterir
`);
};

module.exports.help = {
  name: "yardım"
}
