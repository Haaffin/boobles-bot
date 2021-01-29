const Discord = require('discord.js')

module.exports = {
    //make sure to include the ! as thats the prefix for the bot. You can change this to whatever you want, just make sure you use the same one
    //for every command
    name: '!misc', 
    description: 'description',
    //For clarification, args and the client aren't required for every command, they're just here if you ever plan 
    //on using a command that requires them
    execute(msg, args, {client}) {
        const miscHelp = new Discord.MessageEmbed()
        .setColor('#800000')
        .setTitle('Misc')
        .setDescription('List of all Misc commands')
        .addFields(
            {name: '!ticket', value: 'Creates a support channel. **NOTE: SERVER MUST HAVE A ROLE CALLED ``Support Staff``**'},
            {name: '!resolve', value: 'Marks the ticket as solved and deletes it'},
            {name: '!bug', value:'Find a bug with my commands? Report it to the dev with this command! Simply use !bug <issue>!'},
            {name: '!invite', value: 'creates a permanent invite link to the server the command was used in!'},
            {name: '!support', value: 'Creates an invite link so you can join the support server!'},
            {name: '!website', value: 'Send the link to my new website!'},
            {name: '!dad', value: 'Sends a random dad joke to the channel it was used in!'},
            {name: '!urban', value: 'Looks up whatever you want on Urban Dictionary! **requires the channel to be NSFW locked**'},
            {name: '!suggest', value: 'Sends a command suggestion to be voted on in the Support Server!'}
        )
        msg.channel.send(miscHelp)
        msg.delete()
    },
  };