const fetch = require('node-fetch')
const querystring = require('querystring');

const Discord = require('discord.js')

const trim = (str, max) => (str.length > max ? `${str.slice(0, max - 3)}...` : str);

module.exports = {
    //make sure to include the ! as thats the prefix for the bot. You can change this to whatever you want, just make sure you use the same one
    //for every command
    name: '!urban', 
    description: 'description',
    //For clarification, args and the client aren't required for every command, they're just here if you ever plan 
    //on using a command that requires them
    async execute(msg, args, {client}) {

        if(msg.channel.nsfw === undefined || msg.channel.nsfw === false){
            msg.channel.send('This command can only be used in a NSFW channel')
        }else{
                if (!args.length) {
                    return msg.channel.send('You gotta tell me what to look for, dude.');
                }
        
                const query = querystring.stringify({ term: args.join(' ') });
        
                const { list } = await fetch(`https://api.urbandictionary.com/v0/define?${query}`).then(response => response.json());
        const trim = (str, max) => (str.length > max ? `${str.slice(0, max - 3)}...` : str);
                if (!list.length) {
                    return msg.channel.send(`*rummages through the giant piles of trash in his room*\nsorry, I can't find **${args.join(' ')}** `);
                }
        
                const [answer] = list;
        
                const embed = new Discord.MessageEmbed()
                    .setColor('#800000')
                    .setTitle(answer.word)
                    .setURL(answer.permalink)
                    .addFields(
                        { name: 'Definition', value: trim(answer.definition, 1024) },
                        { name: 'Example', value: trim(answer.example, 1024) },
                        { name: 'Rating', value: `${answer.thumbs_up} thumbs up. ${answer.thumbs_down} thumbs down.` },
                    );
                msg.channel.send(embed);
                msg.delete()
            }
    },
  };