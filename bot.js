const Discord = require("discord.js");
const bot = new Discord.Client();
var prefix = ".";
const fs = require("fs");

const mysql = require("mysql")

bot.commands = new Discord.Collection()

require('fs').readdir("./commands/", (err, files) => {
  console.log("Loading commands...");
  if (err) return console.log(`Command loading failed!`);
  files.filter(f => f.split(".").pop() === "js").forEach((f, i) => {
    bot.commands.set(require(`./commands/${f}`).help.name, require(`./commands/${f}`));
  });
});

bot.on("ready", () => {
  console.log("Alive.");
  bot.user.setActivity("For .help", {type: "WATCHING"});
});

var con = mysql.createConnection({
  host: "sql9.freemysqlhosting.net",
  user: "sql9287994",
  pass: process.env.sqlpass,
  database: "sql9287994"
})

con.connect(err => {
  if(err) throw err;
  console.log("connected.")
})

bot.on('message', message => {
  let mArray = message.content.split(" ")
  let args = mArray.slice(1)
  let cmd = bot.commands.get(mArray[0].slice(prefix.length))
  if (message.author.bot) return;
  if (message.channel.type == "dm") return;
  if (!message.content.startsWith(prefix)) return;
  if (cmd) {
    cmd.run(bot, message, args, Discord)
    console.log(`${message.author.username} used the ${message.content.split(" ")[0]} command.`)
  }
})

bot.login(process.env.token)
