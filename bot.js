const Discord = require('discord.js');
const client = new Discord.Client();



client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

 client.on('message', message => {
    if (message.content === '!staff') {
    	message.reply('https://bit.ly/DinoStaff');
  	}
}); 

 client.on('message', message => {
    if (message.content === '!channel') {
    	message.reply('https://www.youtube.com/channel/UCXXwv_TOATDZdHNuq-lpLgw');
  	}
}); 

 client.on('message', message => {
    if (message.content === '!yoshi') {
    	message.reply('Yoshirocks the best dinosaur Minecraft  YouTuber you will ever,A jam packed channel with new and awesome content,this wholesome youtuber will have you hooked for hours,Drop a like on his videos for a cookie,he works damn hard  on his videos so you better subscribe!');
  	}
}); 

client.on('message', message => { if (message.content.startsWith("!say")) { message.delete(1000);  message.channel.send(message.content.slice(4, message.content.length)); } 
});

client.on('message', message => {if(message.content.includes('fuck') { message.delete(1000);  message.reply('Mind Your Language You Prick'); } 
});


client.login(process.env.BOT_TOKEN);