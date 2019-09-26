

1
const Discord = require ('discord.js');
2
const bot = new Discord.Client();
3
​
4
const TOKEN = process.env.TOKEN
5
​
6
const PREFIX = '!';
7
​
8
require('events').EventEmitter.defaultMaxListeners = 0
9
​
10
bot.on('ready', () =>{
11
console.log(`botname is now online in ${bot.guilds.size} servers with ${bot.users.size} members!`);
12
bot.user.setStatus('dnd, online, idle');
13
bot.user.setActivity(`on ${bot.guilds.size} servers | !invite | !help `);
14
});
15
​
16
bot.on('message', message =>{
17
  if (!message.guild) return
18
  if (message.content === '=accountname') {
19
  var string = `account1
20
account2
21
account3
22
account4`;
23
var words = string.split(',');
24
     let random = words[Math.floor(Math.random()*words.length)];
25
     message.author.send({embed: {
26
      color: 3447003,
27
      description: `**accountname** \n \n ${random}`
28
    }});
29
    message.channel.send({embed: {
30
      color: 3066993,
31
      description: "nameofaccount account sent on ``DMs``!"
32
    }});
33
    };
34
  });
35
​
36
bot.on('message', message =>{
37
  if (!message.guild) return
38
  if (message.content === '=accountname') {
39
  var string = `account1
40
account2
41
account3
42
account4`;
43
var words = string.split(',');
44
     let random = words[Math.floor(Math.random()*words.length)];
45
     message.author.send({embed: {
46
      color: 3447003,
47
      description: `**accountname** \n \n ${random}`
48
    }});
49
    message.channel.send({embed: {
50
      color: 3066993,
51
      description: "nameofaccount account sent on ``DMs``!"
52
    }});
53
    };
54
  });
55
​
56
bot.on('message', message =>{
57
  if (!message.guild) return
58
  if (message.content === '=accountname') {
