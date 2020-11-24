const Discord = require('discord.js');
const { name } = require('./musicCommands/play');

module.exports = {
    //make sure to include the ! as thats the prefix for the bot. You can change this to whatever you want, just make sure you use the same one
    //for every command
    name: '!update', 
    description: 'description',
    //For clarification, args and the client aren't required for every command, they're just here if you ever plan 
    //on using a command that requires them
    execute(msg, args, {client}) {
        msg.channel.send('This command is no longer supported. Use the Support Server to keep up with bot updates! You can find the support server at: https://discord.gg/7xZcjkS')
    },
  };