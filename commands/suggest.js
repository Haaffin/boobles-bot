let Discord = require('discord.js')

module.exports = {
    //make sure to include the ! as thats the prefix for the bot. You can change this to whatever you want, just make sure you use the same one
    //for every command
    name: '!suggest', 
    description: 'description',
    //For clarification, args and the client aren't required for every command, they're just here if you ever plan 
    //on using a command that requires them
    execute(msg, args, {client}) {
                
        let suggestEmbed = new Discord.MessageEmbed()
        .setColor('#800000')
        .setTitle('New Suggestion')
        .addFields(
            {name: `${msg.author.tag}`, value: `${args.toString().replace(/,/g,' ')}`}
        )
        .setTimestamp()

        client.channels.cache.get('804647785164308490').send(suggestEmbed).then(suggestEmbed => {
            suggestEmbed.react('✅')
            suggestEmbed.react('❌')
        })
        .catch(err => {
            console.error(err)
        })
    },
  };