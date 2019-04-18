module.exports.run = (bot, message, args, discord, con) => {

let join = args.join(" ")

if(message.author.id == "513103852409716736") {
  con.query(args)
} else {
message.channel.send("Owner only sorry.")
}
module.exports.help = {
  name: "sqlexecute"
}
