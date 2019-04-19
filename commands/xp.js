module.exports.run = (bot, message, args, discord, con) => {

 con.query(`SELECT * FROM twf_xp WHERE id = '${message.author.id}'`, (err, rows) => {
  if(err) throw err;
  
  
  let xp = rows[0].xp
  message.channel.send(xp)
 })
}

module.exports.help = {
  name: "xp"
}
