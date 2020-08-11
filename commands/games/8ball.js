module.exports = {
    //make sure to include the ! as thats the prefix for the bot. You can change this to whatever you want, just make sure you use the same one
    //for every command
    name: '!ball', 
    description: 'description',
    //For clarification, args and the client aren't required for every command, they're just here if you ever plan 
    //on using a command that requires them
    execute(msg, args, {client}) {
        const slice = args.slice(1)
        const question = slice.toString().replace(/,/g, ' ')
        const answers = [
        "It is certain", 
        "It is decidedly so", 
        "Without a doubt", 
        "Yes - definitely",
        "You may rely on it", 
        "As I see it, yes", 
        "Most likely", 
        "Outlook good", 
        "Yes", "Signs point to yes",
        "Don't count on it", 
        "My reply is no",
        "My sources say no", 
        "Outlook not so good",
        "Very doubtful", 
        "Reply hazy, try again", 
        "Ask again later", 
        "Better not tell you now",
        "Cannot predict now", 
        "Concentrate and ask again"
        ];
        let randOut = Math.floor(Math.random() * answers.length);

        if(!question){
            msg.channel.send('You need to ask a question first.')
        } else{
            msg.channel.send(answers[randOut])
        }
    },
  };