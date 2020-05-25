const botConfig = require('../botConfig.json')
const Discord = require ('discord.js')

module.exports = {
    //make sure to include the ! as thats the prefix for the bot. You can change this to whatever you want, just make sure you use the same one
    //for every command
    name: '!bug', 
    description: 'description',
    //For clarification, args and the client aren't required for every command, they're just here if you ever plan 
    //on using a command that requires them
    execute(msg, args, {client}) {
        client.users.fetch(botConfig.ownerID).then(user => {
            if(args == ""){
                msg.channel.send(`${msg.author}, Cannot send an empty Report. Please add details about the issue you are having by using !bug <issue here>`)
            } else{
                const bugEmbed = new Discord.MessageEmbed()
                .setColor('#800000')
                .setTitle('Bug Report')
                .setDescription(`New Bug Report in: ${msg.guild.name}`)
                .addFields(
                    {name: 'Bug Report author:', value: `${msg.author.username}`},
                    {name: 'Bug Report:', value: `${args}`}
                )
                user.send(bugEmbed)
            }
        })
        // console.log(owner)
        // owner.send('Hello')

    },
  };