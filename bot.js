const Discord = require('discord.js');
const client = new Discord.Client();

if (message.author.bot) return;

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!info') {
    	message.reply('Two Tone Rebel V1.3');
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

client.on('message', message => { if (message.content.includes("retard")) { message.delete(1000);  message.reply('Language you imbecile'); }
 });

client.on('message', message => { if (message.content.includes("Retard")) { message.delete(1000);  message.reply('Language you imbecile'); }
 });

client.on('message', message => { if (message.content.includes("nigga")) { message.delete(1000);  message.reply('Language you imbecile'); }
 });

client.on('message', message => { if (message.content.includes("Nigga")) { message.delete(1000);  message.reply('Language you imbecile'); }
 });
 
 client.on('message', message => { if (message.content.includes("nigger")) { message.delete(1000);  message.reply('Language you imbecile'); }
 });

client.on('message', message => { if (message.content.includes("Nigger")) { message.delete(1000);  message.reply('Language you imbecile'); }
 });
 


client.login(process.env.BOT_TOKEN);
