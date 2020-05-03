const botConfig = require('../botConfig.json')
module.exports = {
    //make sure to include the ! as thats the prefix for the bot. You can change this to whatever you want, just make sure you use the same one
    //for every command
    name: '!kill', 
    description: 'description',
    //For clarification, args and the client aren't required for every command, they're just here if you ever plan 
    //on using a command that requires them
    execute(msg, args, {client}) {
        if(msg.author.id === botConfig.ownerID){
            console.error('BOT HAS BEEN KILLED BY OWNER')
            console.error('SHUTTING DOWN IN 3 SECONDS')
            setTimeout(() =>{
                client.destroy()
                console.log('Program terminated...')
            },3000)
        }
    },
  };