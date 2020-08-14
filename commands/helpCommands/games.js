const Discord = require('discord.js')

module.exports = {
    //make sure to include the ! as thats the prefix for the bot. You can change this to whatever you want, just make sure you use the same one
    //for every command
    name: '!games', 
    description: 'description',
    //For clarification, args and the client aren't required for every command, they're just here if you ever plan 
    //on using a command that requires them
    execute(msg, args, {client}) {
        const miscHelp = new Discord.MessageEmbed()
        .setColor('#800000')
        .setTitle('Games')
        .setDescription('List of all Game commands')
        .addFields(
            {name: '!ball', value: 'Ask the 8ball a question, and recieve guidance!'}
        )
        msg.channel.send(miscHelp)
    },
  };