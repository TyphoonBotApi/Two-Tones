const Discord = require("discord.js");
const client = new Discord.Client();


const config = require("./config.json");

client.on("ready", () => {

  
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 

  
  client.user.setActivity(`Serving ${client.guilds.size} servers`);

});


client.on("guildCreate", guild => {


  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);

  client.user.setActivity(`Working hard`);

});


client.on("guildDelete", guild => {


  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);

  client.user.setActivity(`Working hard`);

});



client.on("message", async message => {


  if(message.author.bot) return;

  
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);

 
  

    if(command === "ping") {

    
    const m = await message.channel.send("Ping?");

    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);

  }

  

  if(command === "say") {

   

    const sayMessage = args.join(" ");

    

    message.delete().catch(O_o=>{}); 

    message.channel.send(sayMessage);

  }



client.login(config.token);

