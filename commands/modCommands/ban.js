module.exports = {
    //make sure to include the ! as thats the prefix for the bot. You can change this to whatever you want, just make sure you use the same one
    //for every command
    name: '!ban', 
    description: 'description',
    //For clarification, args and the client aren't required for every command, they're just here if you ever plan 
    //on using a command that requires them
    execute(msg, args, {client}) {
        if (msg.member.hasPermission('ADMINISTRATOR')){
            const user = msg.mentions.users.first()
            if(user){
                const member = msg.guild.member(user)
                if(member){
                    member.ban()
                    .then(() => {
                        msg.reply(`Successfully banned ${user.username}`)
                        msg.delete()
                    })
                    .catch( err => {
                        console.error(err)
                    })
                }

            }
            else {
                msg.reply('No user was found. Did you forget to tag them?')
                msg.delete()
                }
            } else{
                msg.channel.send('You must be an admin to use this command')
                msg.delete()
            }
    },
  };