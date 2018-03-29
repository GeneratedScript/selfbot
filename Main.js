// Don't touch anything without asking GeneratedScript#3909 first. \\

const Discord = require("discord.js");
const client = new Discord.Client();
const snekfetch = require("snekfetch");
const prefix = ";";

// Post update

client.on("ready", () => {
   
});

// Begin Commands function \\

client.on('unhandledRejection', err => console.error(`Uncaught Promise Rejection: \n${err.stack}`));


client.on("message", (message) => {
  const args = message.content.slice(prefix.length).split(/ +/);
  if (message.startsWith(";say")) {
      message.delete();
      const user = message.mentions.members.first()
      const msg = message[2]
      message.channel.createWebhook(user.username, user.AvatarURL)
          .then(function (webhook) {
              webhook.send(msg);
          }
      )
  }
})



client.login(process.env.MY_TOKEN);
