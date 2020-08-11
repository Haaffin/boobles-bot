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
            {name: 'Games!', value: 'Today marks the day that I begin to add some simple games to the mix! Starting with a simple 8ball command :)'},
            {name: '!ball', value: 'Have a question that needs answered? Asked the magical 8ball! Simply type !ball <question to ask> and maybe the mystical 8ball will answer it for you!'}
        )
        msg.channel.send(updateEmbed)
        console.log(`${msg.author.username} checked the update!`)
    },
  };