module.exports.run = (bot, message, args, discord, con) => {
 let target = message.members.mentions.first() || message.guild.members.get(args[1]) || message.author.id
 
 con.query(`SELECT * FROM xp WHERE id = '${target.id}'`, (err, rows) => {
  if(err) throw err;
  
  if(!rows[0]) return message.channel.send("This person has no XP!")
  
  let xp = rows[0].xp
  message.channel.send(xp)
 })
}

module.exports.help = {
  name: "xp"
}
