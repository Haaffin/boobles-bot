const { Message } = require('discord.js');
const fetch = require('node-fetch')

module.exports = {
    //make sure to include the ! as thats the prefix for the bot. You can change this to whatever you want, just make sure you use the same one
    //for every command
    name: '!dad', 
    description: 'description',
    //For clarification, args and the client aren't required for every command, they're just here if you ever plan 
    //on using a command that requires them
    async execute(msg, args, {client}) {
        const {joke} = await fetch('https://icanhazdadjoke.com/', {headers: {'Accept': 'application/json'}}).then(res => res.json()).catch(err => console.error(err))

        
        msg.channel.send(joke)
        msg.delete()
    },
  };