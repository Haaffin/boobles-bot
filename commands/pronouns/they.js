module.exports = {
    //make sure to include the ! as thats the prefix for the bot. You can change this to whatever you want, just make sure you use the same one
    //for every command
    name: '!they', 
    description: 'description',
    //For clarification, args and the client aren't required for every command, they're just here if you ever plan 
    //on using a command that requires them
    execute(msg, args, {client}) {
        const role = msg.guild.roles.cache.find(role => role.name === "They/Them")
        if(msg.guild.id == 676535812401135629){
            msg.member.roles.add(role)
            console.log(`Added role: ${role.name} to ${msg.author.username}`)
            msg.delete()
        } else {
            return
        }
    },
  };