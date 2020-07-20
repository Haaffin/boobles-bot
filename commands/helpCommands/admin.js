const Discord = require('discord.js')

module.exports = {
    //make sure to include the ! as thats the prefix for the bot. You can change this to whatever you want, just make sure you use the same one
    //for every command
    name: '!admin', 
    description: 'description',
    //For clarification, args and the client aren't required for every command, they're just here if you ever plan 
    //on using a command that requires them
    execute(msg, args, {client}) {
        const adminHelp = new Discord.MessageEmbed()
        .setColor('#800000')
        .setTitle('Admin')
        .setDescription('List of all admin commands')
        .addFields(
            {name: '!kick', value: 'Someone being a butthead in your server? Kick em out by using !kick <@user>'},
            {name: '!ban', value: "Someone being a butthead in your server but a kick isn't good enough? ban em by using !ban <@user>"},

        )
        msg.channel.send(adminHelp)
    },
  };