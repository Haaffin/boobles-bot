const Discord = require('discord.js')
const client = new Discord.Client()
const commands = require('./commands')

const config = require('./botConfig.json')

client.commands = new Discord.Collection();

Object.keys(commands).map(key =>{
    client.commands.set(commands[key].name, commands[key])
})

client.on('ready', () => {
    console.log('Ready')
    
})

client.on("guildCreate", guild => {
    console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
    client.user.setGame(`on ${client.guilds.size} servers`);
});

client.on("guildDelete", guild => {
    console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
    client.user.setGame(`on ${client.guilds.size} servers`);
});

client.on('message', msg => {
    const args = msg.content.split(/ +/)
    const command = args.shift().toLowerCase()

    if(!client.commands.has(command)) return
    
    try{
        client.commands.get(command).execute(msg, args, {client})
    }catch(err){
        console.error(err)
        msg.reply('There was an error trying to call that command!')
    }
    

})

client.login(config.TOKEN)