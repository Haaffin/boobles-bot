const Discord = require('discord.js')

module.exports = {
    //make sure to include the ! as thats the prefix for the bot. You can change this to whatever you want, just make sure you use the same one
    //for every command
    name: '!ticket', 
    description: 'description',
    //For clarification, args and the client aren't required for every command, they're just here if you ever plan 
    //on using a command that requires them
    execute(msg, args, {client}) {
        const support = msg.guild.roles.cache.find(role => role.name === "Support Staff")
        let everyone = msg.guild.roles.cache.find(role => role.name === "@everyone")

        msg.guild.channels.create(`ticket-${msg.author.id}`, {
            type: 'text',
            permissionOverwrites: [
                {
                    id: support,
                    allow: ['VIEW_CHANNEL']
                },
                {
                    id: everyone,
                    deny: ['VIEW_CHANNEL']
                },
                {
                    id: msg.author.id,
                    allow: ['VIEW_CHANNEL']
                },
            ]
        })
        msg.channel.send(`:white_check_mark: Your ticket has been created.`);
        setTimeout(() => {
            const newChannel = msg.guild.channels.cache.find(channel => channel.name === `ticket-${msg.author.id}`)
            newChannel.send(`${msg.author}, Please send all relevant information about your issue here. Be as precise as possible, so we can help you quicker!`)
            console.log(newChannel)
        },500)

        
}}