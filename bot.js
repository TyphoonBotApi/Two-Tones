const Discord = require('discord.js');
const client = new Discord.Client();

client.user.setActivity('Text')

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!info') {
    	message.reply('Two Tone Rebel V1.1');
  	}
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


client.on('message', message => {
    if (message.content === 'Captain Midnight') {
    	message.reply('Gg,you found a Easter egg,Now what?Is there more to this?');
  	}
});


client.on('message', message => {
    if (message.content === 'What time is it?') {
    	message.channel.send('Tis be time for a crusade');
  	}
});
    	
client.on('message', message => { if (message.content.startsWith("!say")) { message.delete(1000);  message.channel.send(message.content.slice(4, message.content.length)); } 
});

client.on('message', message => { if (message.content.includes("fuck")) { message.delete(1000);  message.reply('Language you imbecile'); }
 });

client.on('message', message => { if (message.content.includes("Fuck")) { message.delete(1000);  message.reply('Language you imbecile'); }
 });

client.on('message', message => { if (message.content.includes("bitch")) { message.delete(1000);  message.reply('Language you imbecile'); }
 });
 
 client.on('message', message => { if (message.content.includes("Bitch")) { message.delete(1000);  message.reply('Language you imbecile'); }
 });

client.on('message', message => { if (message.content.includes("cunt")) { message.delete(1000);  message.reply('Language you imbecile'); }
 });

client.on('message', message => { if (message.content.includes("Cunt")) { message.delete(1000);  message.reply('Language you imbecile'); }
 });

client.on('message', message => { if (message.content.includes("slut")) { message.delete(1000);  message.reply('Language you imbecile'); }
 });

client.on('message', message => { if (message.content.includes("Slut")) { message.delete(1000);  message.reply('Language you imbecile'); }
 });

client.on('message', message => { if (message.content.includes("dick")) { message.delete(1000);  message.reply('Language you imbecile'); }
 });

client.on('message', message => { if (message.content.includes("Dick")) { message.delete(1000);  message.reply('Language you imbecile'); }
 });


client.on('message', message => { if (message.content.includes("pussy")) { message.delete(1000);  message.reply('Language you imbecile'); }
 });


client.on('message', message => { if (message.content.includes("Pussy")) { message.delete(1000);  message.reply('Language you imbecile'); }
 });

 client.on('message', message => { if (message.content.includes("ass")) { message.delete(1000);  message.reply('Language you imbecile'); }
 }); 

client.on('message', message => { if (message.content.includes("Ass")) { message.delete(1000);  message.reply('Language you imbecile'); }
 });


client.on('message', message => { if (message.content.includes("retard")) { message.delete(1000);  message.reply('Language you imbecile'); }
 });

client.on('message', message => { if (message.content.includes("Retard")) { message.delete(1000);  message.reply('Language you imbecile'); }
 });

client.on('message', message => { if (message.content.includes("nig")) { message.delete(1000);  message.reply('Language you imbecile'); }
 });

client.on('message', message => { if (message.content.includes("Nig")) { message.delete(1000);  message.reply('Language you imbecile'); }
 });
 
client.login(process.env.BOT_TOKEN);
