const Discord = require('discord.js')

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
            {name: 'Bug Report', value: "New commands have been added!"},
            {name: '!bug', value: 'Find a bug with my commands? Report it to the dev with this command! Simply use !bug <issue>!'}
        )
        msg.channel.send(updateEmbed)
        console.log(`${msg.author.username} checked the update!`)
    },
  };