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
        const updateEmbed = new Discord.MessageEmbed()
        .setColor('#800000')
        .setTitle('New Update!')
        .setDescription('Change log:')
        .addFields(
            {name: 'Bug Fixes:', value: "Nothing to report"},
            {name: 'Other Notes:', value: "We're officially verified now! Thank you all so much for your support. I started a new job so development on the bot is going to slow down sadly :( I will also no longer be using the !update command so make sure you get into the support server to keep up with future updates. You can find the invite link using !support"},
        )
        msg.channel.send(updateEmbed)
        console.log(`${msg.author.username} checked the update!`)
    },
  };