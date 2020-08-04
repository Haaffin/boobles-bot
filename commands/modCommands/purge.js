module.exports = {
    //make sure to include the ! as thats the prefix for the bot. You can change this to whatever you want, just make sure you use the same one
    //for every command
    name: '!purge', 
    description: 'description',
    //For clarification, args and the client aren't required for every command, they're just here if you ever plan 
    //on using a command that requires them
    execute(msg, args, {client}) {
        if (msg.member.hasPermission('ADMINISTRATOR')){
            const amount = Number.parseInt(args[0])
            msg.channel.bulkDelete(amount+1)
            .then(messages => console.log(`Bulk Deleted ${messages.size} messages`))
            .catch(err => console.log(err)) 
        }else{
            msg.channel.send('You must be an admin to use this command')
        }
    },
  };