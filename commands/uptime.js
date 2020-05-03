module.exports = {
    //make sure to include the ! as thats the prefix for the bot. You can change this to whatever you want, just make sure you use the same one
    //for every command
    name: '!stats', 
    description: 'Returns the uptime of the bot',
    execute(msg, args, {client}) {
        let totalSeconds = (client.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.floor(totalSeconds % 60);

        msg.channel.send(`Bot has been online for: ${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds.`)
    },
  };
