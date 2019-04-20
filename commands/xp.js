module.exports.run = (bot, message, args, discord, con) => {

 con.query(`SELECT * FROM twf_xp WHERE id = '${message.author.id}'`, (err, rows) => {
  if(err) throw err;
  
  
  let xpe = new Discord.RichEmbed()
  .setTitle("User XP")
  .setDescription(`Your XP is:`, xp)
  .setColor("BLUE")
  
  let xp = rows[0].xp
  message.channel.send({embed: xpe})
 })
}

module.exports.help = {
  name: "xp"
}
