module.exports = {
    //make sure to include the ! as thats the prefix for the bot. You can change this to whatever you want, just make sure you use the same one
    //for every command
    name: '!invite', 
    description: 'description',
    //For clarification, args and the client aren't required for every command, they're just here if you ever plan 
    //on using a command that requires them
    execute(msg, args, {client}) {
        msg.channel.createInvite({maxAge: 0, unique: true, reason: args})
            .then(invite => {
                msg.reply(`Invite created: ${invite}`)
                console.log(`Created invite for ${msg.guild.name}: ${invite}`)
            })
            .catch(e => console.error(e))
    },
  };