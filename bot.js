const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "!"
client.on('ready', () => {
  console.log('---------------');
  console.log(' Bot Is Online')
  console.log('---------------')
});


client.on('message', message => {
if (message.content.startsWith('gif')){
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("RANADOM")
  .setImage("https://cdn.boob.bot/Gifs/1797.gif")
     
  message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
if (message.content.startsWith('nsfw')){
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("RANADOM")
  .setImage("http://snowbot.cf/ass/00001.png")
     
  message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
if (message.content.startsWith('nsfw1')){
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("RANADOM")
  .setImage("http://snowbot.cf/ass/00002.png")
     
  message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
if (message.content.startsWith('nsfw2')){
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("RANADOM")
  .setImage("http://snowbot.cf/ass/00003.png")
     
  message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
if (message.content.startsWith('nsfw3')){
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("RANADOM")
  .setImage("http://snowbot.cf/ass/00004.png")
     
  message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
if (message.content.startsWith('nsfw4')){
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("RANADOM")
  .setImage("http://snowbot.cf/ass/00005.png")
     
  message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
if (message.content.startsWith('nsfw5')){
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("RANADOM")
  .setImage("http://snowbot.cf/ass/00006.png")
     
  message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
if (message.content.startsWith('nsfw6')){
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("RANADOM")
  .setImage("http://snowbot.cf/ass/00007.png")
     
  message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
if (message.content.startsWith('ru')){
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("RANADOM")
  .setImage("http://media.obutts.ru/butts_preview/00513.jpg")
     
  message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
if (message.content.startsWith('ru1')){
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("RANADOM")
  .setImage("http://media.obutts.ru/butts_preview/00937.jpg")
     
  message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
if (message.content.startsWith('mu1')){
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("RANADOM")
  .setImage("https://cdn.boob.bot/Gifs/18F2.gif")
     
  message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
if (message.content.startsWith('mu2')){
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("RANADOM")
  .setImage("https://cdn.boob.bot/Gifs/1771.gif")
     
  message.channel.sendEmbed(embed);
    }
});
client.login(process.env.TOKEN);// لا تغير فيها شيء
