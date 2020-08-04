const Discord = require('discord.js')
const client = new Discord.Client()
const commands = require('./commands/ownerCommands')

const config = require('./botConfig.json')

client.commands = new Discord.Collection();

Object.keys(commands).map(key =>{
    client.commands.set(commands[key].name, commands[key])
})

function updatePresence(){
    client.user.setPresence({ activity: { name: `!update || !help || ${client.guilds.cache.size} Servers`  }, status: 'online' })
    //client.user.setPresence({ activity: { name: `!help || ${client.guilds.cache.size} Servers`  }, status: 'online' })
    //.then(console.log('Sucessfully updated Presence'))
    .catch(console.error)
}

client.on('ready', () => {
    console.log('Online')
    updatePresence()
    setInterval(updatePresence, 120000)
})


client.on("guildCreate", guild => {
    console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
});

client.on("guildDelete", guild => {
    console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
});

client.on('message', async msg => {
    const args = msg.content.split(/ +/)
    const command = args.shift().toLowerCase()

    if(!client.commands.has(command)) return
    
    if(!msg.author.bot){
        try{
            client.commands.get(command).execute(msg, args, {client})
        }catch(err){
            console.error(err)
            msg.reply('There was an error trying to call that command!')
        }
    } else{
        return
    }
    

})

process.on('unhandledRejection', err => console.error('Uncaught Promise Rejection', err))

client.login(config.TOKEN)