const ytdl = require('ytdl-core')
const Youtube = require('discord-youtube-api')
const youtube = new Youtube('AIzaSyDssm9WECQREUdhbUCXZ8LG4OOgHn9Wo9Q')

module.exports = {
    //make sure to include the ! as thats the prefix for the bot. You can change this to whatever you want, just make sure you use the same one
    //for every command
    name: '!play', 
    description: 'description',
    //For clarification, args and the client aren't required for every command, they're just here if you ever plan 
    //on using a command that requires them
    execute(msg, args, {client}) {

        async function searchYouTubeAsync(args) {
            var video = await youtube.searchVideos(args.toString().replace(/,/g,' '));
            console.log(video.url);
            console.log(typeof String(video.url));
            return String(video.url);
          }

        if(msg.channel.type !== 'text');

        const voiceChannel = msg.member.voice.channel

        if(!voiceChannel){
            return msg.channel.send('You must be in a voice channel to use this command')
        }
        
        voiceChannel.join().then(async connection => {
            let url = await searchYouTubeAsync(args);
            let stream = ytdl(url, { filter: 'audioonly' });
            let dispatcher = connection.play(stream);
          
            dispatcher.on('end', () => voiceChannel.leave());
            isReady = true;
          })
    }
  };