const Discord = require('discord.js')
const config = require('./botConfig.json')
const client = new Discord.Client()


client.on('ready', () => {
    console.log('Boobles UPGRADED is online')
})

client.login(config.TOKEN)