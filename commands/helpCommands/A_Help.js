const Discord = require('discord.js')

module.exports = {
    //make sure to include the ! as thats the prefix for the bot. You can change this to whatever you want, just make sure you use the same one
    //for every command
    name: '!help', 
    description: 'description',
    //For clarification, args and the client aren't required for every command, they're just here if you ever plan 
    //on using a command that requires them
    execute(msg, args, {client}) {
        const helpMainEmbed = new Discord.MessageEmbed()
        .setColor('#800000')
        .setTitle('Help')
        .setDescription('List of all commands')
        .addFields(
            {name: '!music', value: 'returns Music commands'},
            {name: '!admin', value: 'returns Admin commands'},
            {name: '!misc', value: 'returns Misc commands'}
        )
        msg.channel.send(helpMainEmbed)
    },
  };