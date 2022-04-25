require("http").createServer((req, res) => res.end("UP")).listen(process.env.PORT || 8080)
const Discord = require('discord.js')
const client = new Discord.Client()

client.on("ready", async () => {
  console.log(`Bot is has been deployed 🚀`)
  client.user
    .setActivity(`Logistack`, { type: "WATCHING" }) //status code
    .catch(error => console.log(error))
})

const canvacord = require("canvacord")

client.on("guildMemberAdd", async member => {
  if(member.guild.id !== "your server id") return;
  const welcomeCard = new canvacord.Welcomer()
  .setUsername(member.user.username)
  .setDiscriminator(member.user.discriminator)
  .setAvatar(member.user.displayAvatarURL({ format: "png" }))
  .setColor("title", "#c328dd") //white
  .setColor("username-box", "#c328dd") //white
  .setColor("discriminator-box", "#c328dd") //white
  .setColor("message-box", "#c328dd") //white
  .setColor("border", "#ffffff") //black
  .setColor("avatar", "#c328dd") //white
  .setBackground("https://cdn.discordapp.com/attachments/952317942308171834/953326315895947294/static_4.png") //should be png format
  .setMemberCount(member.guild.memberCount)
   let attachment = new Discord.MessageAttachment(await 
welcomeCard.build(),"welcome.png")
  member.guild.channels.cache.get("your channel id")
.send(member.user.toString(), attachment)
})

client.login(process.env.TOKEN)
