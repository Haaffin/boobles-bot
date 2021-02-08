module.exports = {
    //make sure to include the ! as thats the prefix for the bot. You can change this to whatever you want, just make sure you use the same one
    //for every command
    name: '!accept', 
    description: 'description',
    async execute(msg, args, {client}) {
        if(msg.guild.id === '705778380766707723'){
            let member = msg.member

            let acceptedRole = await msg.guild.roles.cache.find(role => role.name ==='Verified')

            if(!acceptedRole){
                msg.channel.send('There was an error adding role')
            }

            member.roles.add(acceptedRole).catch(console.error)
            msg.delete()

        } else{
            return
        }
    },
  };