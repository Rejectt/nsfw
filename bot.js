const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "!"
client.on('ready', () => {
  console.log('---------------');
  console.log(' Bot Is Online')
  console.log('---------------')
});

client.on('message', message => {
 if (message.content.startsWith(prefix + 'nsfw')) {
  if(!message.channel.nsfw) return message.channel.send("يجب عليك تفعيل خاصية NSFW للقناة ")

  message.reply = [
    "http://snowbot.cf/ass/00001.png",
    "http://snowbot.cf/ass/00002.png",
    "http://snowbot.cf/ass/00003.png",
    "http://snowbot.cf/ass/00004.png",
    "http://snowbot.cf/ass/00005.png",
    "http://snowbot.cf/ass/00006.png",
    "http://snowbot.cf/ass/00007.png",
    "http://snowbot.cf/ass/00008.png",
    "http://snowbot.cf/ass/00009.png",
    "http://snowbot.cf/ass/00010.png",
    "http://snowbot.cf/ass/00011.png",
    "http://snowbot.cf/ass/00012.png",
    "http://snowbot.cf/ass/00013.png",
    "http://snowbot.cf/ass/00014.png",
    "http://snowbot.cf/ass/00015.png",
    "http://snowbot.cf/ass/00016.png",
    "http://snowbot.cf/ass/00017.png",
    "http://snowbot.cf/ass/00018.png",
    "http://snowbot.cf/ass/00019.png",
    "http://snowbot.cf/ass/00020.png",
    "http://snowbot.cf/ass/00021.png",
    "http://snowbot.cf/ass/00022.png",
    "http://media.obutts.ru/butts_preview/00513.jpg",
    "http://media.obutts.ru/butts_preview/00937.jpg",
    "http://media.obutts.ru/butts_preview/02016.jpg",
    "http://media.obutts.ru/butts_preview/04917.jpg",
    "http://media.obutts.ru/butts_preview/04855.jpg",
    "http://media.obutts.ru/butts_preview/01063.jpg",
    "http://media.obutts.ru/butts_preview/03861.jpg",
    "http://media.obutts.ru/butts_preview/01921.png",
    "http://media.obutts.ru/butts_preview/05262.jpg",
    "http://media.obutts.ru/butts_preview/00369.jpg",
    "http://media.obutts.ru/butts_preview/01016.jpg",
    "http://media.obutts.ru/butts_preview/01002.jpg",
    "http://media.obutts.ru/butts_preview/03073.jpg",
    "http://media.obutts.ru/butts_preview/04413.jpg",
    "http://media.obutts.ru/butts_preview/05702.jpg",
    "http://media.obutts.ru/butts_preview/00280.jpg",
    "http://media.obutts.ru/butts_preview/04524.jpg",
    "http://media.obutts.ru/butts_preview/03797.jpg",
    "http://media.obutts.ru/butts_preview/03743.jpg",
    "http://media.obutts.ru/butts_preview/05340.jpg",
    "http://media.obutts.ru/butts_preview/01115.jpg",
    "http://media.obutts.ru/butts_preview/00548.jpg",
    "http://media.obutts.ru/butts_preview/01664.jpg",
    "http://media.obutts.ru/butts_preview/04413.jpg",
    "http://media.obutts.ru/butts_preview/00506.jpg",
    "http://media.obutts.ru/butts_preview/03831.jpg",
    "http://media.obutts.ru/butts_preview/00127.jpg",
    "http://media.obutts.ru/butts_preview/03663.jpg",
    "http://media.obutts.ru/butts_preview/02254.png",
    "http://media.obutts.ru/butts_preview/01087.jpg",
    "http://media.obutts.ru/butts_preview/02518.jpg",
    "http://media.obutts.ru/butts_preview/00446.jpg",
    "http://media.obutts.ru/butts_preview/05430.jpg",
    "http://media.obutts.ru/butts_preview/01310.jpg",
    "http://media.obutts.ru/butts_preview/01296.jpg",
    "http://media.obutts.ru/butts_preview/02579.jpg",
    "http://media.obutts.ru/butts_preview/02331.jpg",
    "http://media.obutts.ru/butts_preview/03037.jpg",
    "http://media.obutts.ru/butts_preview/00512.jpg",
    "http://media.obutts.ru/butts_preview/00462.jpg",
    "http://media.obutts.ru/butts_preview/02891.jpg",
    "http://media.obutts.ru/butts_preview/01277.jpg",
    "http://media.obutts.ru/butts_preview/03864.jpg",
    "http://media.obutts.ru/butts_preview/05516.jpg",
    "http://media.obutts.ru/butts_preview/03962.jpg",
    "http://media.obutts.ru/butts_preview/04207.jpg",
    "http://media.obutts.ru/butts_preview/03998.jpg",
    "http://media.obutts.ru/butts_preview/04573.jpg",
    "http://media.obutts.ru/butts_preview/01858.jpg",
    "http://media.obutts.ru/butts_preview/03581.jpg",
    "http://media.obutts.ru/butts_preview/00079.jpg",
    "http://media.obutts.ru/butts_preview/00724.jpg",
    "http://media.obutts.ru/butts_preview/02130.jpg",
    "http://media.obutts.ru/butts_preview/00259.jpg",
    "http://media.obutts.ru/butts_preview/05033.jpg",
    "http://media.obutts.ru/butts_preview/04932.jpg",
    "http://media.obutts.ru/butts_preview/00815.jpg",
    "http://media.obutts.ru/butts_preview/03034.jpg",
    "http://media.obutts.ru/butts_preview/02217.jpg",
    "http://media.obutts.ru/butts_preview/02210.jpg",
    "http://media.obutts.ru/butts_preview/03271.jpg",
    "http://media.obutts.ru/butts_preview/02039.jpg",
    "http://media.obutts.ru/butts_preview/04866.jpg",
    "http://media.obutts.ru/butts_preview/00652.jpg",
    "http://media.obutts.ru/butts_preview/03005.jpg",
    "http://media.obutts.ru/butts_preview/01431.jpg",
    "http://media.obutts.ru/butts_preview/03825.jpg",
    "http://media.obutts.ru/butts_preview/00526.jpg",
    "http://media.obutts.ru/butts_preview/05755.jpg",
    "http://media.obutts.ru/butts_preview/02019.jpg",
    "http://media.obutts.ru/butts_preview/02452.jpg",
    "http://media.obutts.ru/butts_preview/04618.jpg",
    "http://media.obutts.ru/butts_preview/04339.png",
    "http://media.obutts.ru/butts_preview/04603.jpg",
    "http://media.obutts.ru/butts_preview/01946.jpg",
    "http://media.obutts.ru/butts_preview/05479.jpg",
    "http://media.obutts.ru/butts_preview/04923.jpg",
    "http://media.obutts.ru/butts_preview/04821.jpg",
    "http://media.obutts.ru/butts_preview/04127.jpg",
    "http://media.obutts.ru/butts_preview/02728.jpg",
    "http://media.obutts.ru/butts_preview/03826.jpg",
    "http://media.obutts.ru/butts_preview/02603.jpg",
    "http://media.obutts.ru/butts_preview/02318.jpg",
    "http://media.obutts.ru/butts_preview/03115.jpg",
    "http://media.obutts.ru/butts_preview/02629.jpg",
    "http://media.obutts.ru/butts_preview/02023.jpg",
    "http://media.obutts.ru/butts_preview/00174.jpg",
    "http://media.obutts.ru/butts_preview/00710.jpg",
    "http://media.obutts.ru/butts_preview/00297.jpg",
    "http://media.obutts.ru/butts_preview/02682.jpg",
    "http://media.obutts.ru/butts_preview/05492.jpg",
    "http://media.obutts.ru/butts_preview/05439.jpg",
    "http://media.obutts.ru/butts_preview/00328.jpg",
    "http://media.obutts.ru/butts_preview/05192.jpg",
    "http://media.obutts.ru/butts_preview/04289.jpg",
    "http://media.obutts.ru/butts_preview/01156.png"
  ];

  let result = Math.floor((Math.random() * ass.length));

  let msg = new Discord.RichEmbed()
  .setTitle(":ok_hand: :sweat_drops:")
  .setImage(ass[result])
  .setFooter(`Requested by ${message.member.user.tag} at ${message.createdAt.toDateString()}`);

  message.channel.send(msg);

};

module.exports.help = {
  name: "ass"
});

client.login(process.env.TOKEN);
