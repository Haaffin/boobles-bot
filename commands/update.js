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
            {name: 'Bug Fixes:', value: "It appears I was an idiot. The ban and kick commands could've been used by anyone. Luckily, this has been fixed before it became an issue"},
            {name: '!invite', value: 'Need to quickly create an invite to your server? use !invite and Boobles will do it for you! It creates an invite to the channel it was used in that lasts forever.'}
        )
        msg.channel.send(updateEmbed)
        console.log(`${msg.author.username} checked the update!`)
    },
  };