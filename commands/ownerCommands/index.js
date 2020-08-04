module.exports = {
    Help: require('../helpCommands/A_Help'),
    Admin: require('../helpCommands/admin'),
    Misc: require('../helpCommands/misc'),
    Music: require('../helpCommands/music'),
    Kill: require('./kill'),
    CreateTicket: require('../ticketSystem/CreateTicket'),
    DeleteTicket: require('../ticketSystem/DeleteTicket'),
    Support: require('../support'),
    BugReport: require('../bugReport'),
    Update: require('../update'),
    Ban: require('../modCommands/ban'),
    Kick: require('../modCommands/kick'), 
    Play: require('../musicCommands/play'),
    Invite: require('../modCommands/invite')
}