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
            {name: 'Update', value: "New commands have been added!"},
            {name: '!ban', value: 'Someone in your server being too much of a butthead? Ban em. Just do !ban <tag the user>'},
            {name: '!kick', value: 'Someone being a butt head but you think a ban is too mean? Kick em from the server instead. Just do !kick <tag the user>'}
        )
        msg.channel.send(updateEmbed)
        console.log(`${msg.author.username} checked the update!`)
    },
  };