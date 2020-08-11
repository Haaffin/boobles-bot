module.exports = {
    //make sure to include the ! as thats the prefix for the bot. You can change this to whatever you want, just make sure you use the same one
    //for every command
    name: '!pause', 
    description: 'description',
    //For clarification, args and the client aren't required for every command, they're just here if you ever plan 
    //on using a command that requires them
    execute(msg, args, {client}) {
        if(msg.author.id === "216285227142742018"){
            const voiceChannel = msg.member.voice.channel
            voiceChannel.pause()
            console.log('paused')
        }
    },
  };