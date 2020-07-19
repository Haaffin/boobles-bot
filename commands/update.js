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
            {name: "Music commands!', value: 'Boobles finally has Music commands! Be warned though, this is a very early stage. I haven't played with javascript music commands before so this is a learning process."},
            {name: '!play', value: 'simply type !play <name of artist + song> to play that song!'},
            {name: 'IMPORTANT NOTES!', value: 'THERE IS NO QUEUE SYSTEM YET. IF YOU USE THE COMMAND AGAIN IT WILL SKIP YOUR CURRENT SONG. IF YOU COME ACROSS ANY BUGS, PLEASE REPORT THEM TO ME IN THE SUPPORT SERVER AT !support'}
        )
        msg.channel.send(updateEmbed)
        console.log(`${msg.author.username} checked the update!`)
    },
  };