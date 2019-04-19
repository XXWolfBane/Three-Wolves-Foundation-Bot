module.exports.run = (bot, message, args, Discord, con) => {

let join = args.join(" ")

if(message.author.id == "513103852409716736") {
  con.query(join)
} else {
message.channel.send("Owner only sorry.")
}
module.exports.help = {
  name: "sqlexecute"
}
