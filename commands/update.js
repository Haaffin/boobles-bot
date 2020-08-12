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
            {name: 'New Website!', value: "We have a website now! It's not 100% complete yet, but it's there :) You can check it out using the !website command!"},
            {name: 'Other notes:', value: " "}
        )
        msg.channel.send(updateEmbed)
        console.log(`${msg.author.username} checked the update!`)
    },
  };