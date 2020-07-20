const Discord = require('discord.js')

module.exports = {
    //make sure to include the ! as thats the prefix for the bot. You can change this to whatever you want, just make sure you use the same one
    //for every command
    name: '!help', 
    description: 'description',
    //For clarification, args and the client aren't required for every command, they're just here if you ever plan 
    //on using a command that requires them
    execute(msg, args, {client}) {
        const musicHelp = new Discord.MessageEmbed()
        .setColor('#800000')
        .setTitle('Music')
        .setDescription('List of all Music commands')
        .addFields(
            {name: '!play', value: 'Plays a song for you! NOTE: THERE IS NO QUEUE SYSTEM SET UP YET. IF YOU USE THE COMMAND WHILE A SONG IS CURRENTLY PLAYING, THE CURRENT SONG WILL BE SKIPPED'},

        )
        msg.channel.send(musicHelp)
    },
  };