const dbd = require("dbd.js");
const bot = new dbd.Bot({
 "token": 'YOUR_TOCKEN_HERE',
 "prefix": 'YOUR_PREFIX_HERE'
})

bot.onMessage()


bot.command({
  name: 'ping',
  code: `pong! \`$ping\``
})
//make shure to add commands like ping ok, also join discord
