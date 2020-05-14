const Discord = require('discord.js')

module.exports = {
    //make sure to include the ! as thats the prefix for the bot. You can change this to whatever you want, just make sure you use the same one
    //for every command
    name: '!help', 
    description: 'description',
    //For clarification, args and the client aren't required for every command, they're just here if you ever plan 
    //on using a command that requires them
    execute(msg, args, {client}) {
        const helpEmbed = new Discord.MessageEmbed()
        .setColor('#800000')
        .setTitle('Help')
        .setDescription('List of all commands')
        .addFields(
            {name: '!ticket', value: 'Creates a support channel. **NOTE: SERVER MUST HAVE A ROLE CALLED ``Support Staff``**'},
            {name: '!resolve', value: 'Marks the ticket as solved and deletes it'}
        )
        msg.channel.send(helpEmbed)
    },
  };