const discord = require('discord.js')
const ytdl = require("ytdl-core")

const bot = new discord.Client()

const queue = new Map()

const token;

const prefix = "!"

bot.on('ready', () => {
    console.log('ye bot tumhari ma chodega')
})

const gaali = ["haggu saale", "khelna seekh ja chomu", "baisiti complete", "noob bhkl", "backchod saala", "iski ma ka bhodsa", "chaman chutiya", "ye basu lvl hagga", "aunty waali gaali"]

const songs = ["https://www.youtube.com/watch?v=nDGNTpd8u5c",
                "https://www.youtube.com/watch?v=BRKPBoCp5WE&has_verified=1",
                "https://www.youtube.com/watch?v=AjgArB7PKTU&t=186s",
                "https://www.youtube.com/watch?v=_bqzS1sIttU",
]

const servers = {}

bot.on('message', msg => {
    let args = msg.content.substring(prefix.length).split(" ")
    
    switch(args[0]) {
         case "gaali":
             if (args[1]) {
                msg.channel.send(gaali[Math.floor(Math.random()*gaali.length)] + args[1])
                break
             }
            msg.reply(gaali[Math.floor(Math.random()*gaali.length)])
            break;
        case "dead":
            if (args[1]) {
                msg.channel.send("21 topo ki salami to " + args[1])
            }
            else {
                msg.channel.send("marne waale ka naam tera baap batayega")
            }
            break
        case "midterm":
                if (args[1]) {
                    msg.channel.send("jaag ja this is a fucking midterm" + args[1])
                }
                else {
                    msg.channel.send("midterm hain bhkl @everyone")
                }
                break
        case "ape":
            msg.reply("No, silly human, I have no tail, I am definitely an ape.")
            break
        case "help":
            msg.reply("Aapka iss apatkaalin stithi se nikle hue bot mein hardik swagat hain\n Ye bot aapko bhin bhin prakar ki gaalia sunaega taaki aapka already dhukad man aur dhuki ho jaye \n gaali khane ke liye kripya !gaali likhe")
            break;
        case "basu":
            msg.channel.send("jaag ja basu this is a fucking DOTA game!")
            break
        case "goodbot":
            msg.channel.send("nazar na lage humare pyaare bot ko")
            break
        case "badbot":
            msg.channel.send("ye akhand chutiya chakka bot")
            break
        case "mahir":
            msg.channel.send("niche aaj @everyone")
            break
        case "tati":
            msg.channel.send(`
                        ░░░░░░░░░░░█▀▀░░█░░░░░░
            ░░░░░░▄▀▀▀▀░░░░░█▄▄░░░░
            ░░░░░░█░█░░░░░░░░░░▐░░░
            ░░░░░░▐▐░░░░░░░░░▄░▐░░░
            ░░░░░░█░░░░░░░░▄▀▀░▐░░░
            ░░░░▄▀░░░░░░░░▐░▄▄▀░░░░
            ░░▄▀░░░▐░░░░░█▄▀░▐░░░░░
            ░░█░░░▐░░░░░░░░▄░█░░░░░
            ░░░█▄░░▀▄░░░░▄▀▐░█░░░░░
            ░░░█▐▀▀▀░▀▀▀▀░░▐░█░░░░░
            ░░▐█▐▄░░▀░░░░░░▐░█▄▄░░
            ░░░▀▀░▄TSM▄░░░▐▄▄▄▀░░░
            `)
            break
        case "dota":
            msg.channel.send(`
            ░▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒░
▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒
▓▓▓▒░░▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
▓▓▓▓▒░░░▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒░░▒▓▓▓▓▓▓▓
▓▓▓▓▓▒░░░░░▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒░░░░▒▓▓▓▓▓▓▓
▓▓▓▓▓▓▓▒░░░░░▒▓▓▓▓▓▓▓▓▓▓▓▒░░░░░░░░░▒▓▓▓▓▓▓
▓▓▓▓▓▓▓▓▒░░░░░░▒▓▓▓▓▓▓▓▓▓▓▓▒▒░░░░░░▒▓▓▓▓▓▓
▓▓▓▓▓▓▓▓▓▒░░░░░░░▒▓▓▓▓▓▓▓▓▓▓▓▓▒░░░▒▓▓▓▓▓▓▓
▓▓▓▓▓▓▓▓▓▓▒░░░░░░░░░▒▓▓▓▓▓▓▓▓▓▓▒░▒▓▓▓▓▓▓▓▓
▓▓▓▓▓▓▓▓▓▓▓▓▒░░░░░░░░░░▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒░░░░░░░░░░░▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒░░░░░░░░░░░▒▓▓▓▓▓▓▓▓▓▓▓▓▓
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒░░░░░░░░░░░░▒▓▓▓▓▓▓▓▓▓▓
▓▓▓▓▓▓▓▒░░▒▓▓▓▓▓▓▓▓▓▓▒░░░░░░░░░░░░▒▓▓▓▓▓▓▓
▓▓▓▓▓▓▒░░░░░▒▓▓▓▓▓▓▓▓▓▒░░░░░░░░░░░░░▒▓▓▓▓▓
▓▓▓▓▓▒░░░░░░░░▒▓▓▓▓▓▓▓▓▓▒░░░░░░░░░░░░░▒▓▓▓
▓▓▓▓▒░░░░░░░░░░░▒▓▓▓▓▓▓▓▓▓▒░░░░░░░░░░░░▒▓▓
▓▓▓▓▓▒░░░░░░░░▒▓▓▓▓▓▓▓▓▓▓▓▓▓▒░░░░░░░░░▒▓▓▓
▓▓▓▓▓▓▒░░░░▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒░░░░░▒▓▓▓▓
▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒
░▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒░
Its play or get played`)
        break
        case "salty":
            msg.channel.send(`
            ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡀⠀⠀⠀⠀⢀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡖⠁⠀⠀⠀⠀⠀⠀⠈⢲⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣼⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣧⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣸⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⣇⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣿⣿⡇⠀⢀⣀⣤⣤⣤⣤⣀⡀⠀⢸⣿⣿⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢻⣿⣿⣔⢿⡿⠟⠛⠛⠻⢿⡿⣢⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣀⣤⣶⣾⣿⣿⣿⣷⣤⣀⡀⢀⣀⣤⣾⣿⣿⣿⣷⣶⣤⡀⠀⠀⠀⠀
⠀⠀⢠⣾⣿⡿⠿⠿⠿⣿⣿⣿⣿⡿⠏⠻⢿⣿⣿⣿⣿⠿⠿⠿⢿⣿⣷⡀⠀⠀
⠀⢠⡿⠋⠁⠀⠀⢸⣿⡇⠉⠻⣿⠇⠀⠀⠸⣿⡿⠋⢰⣿⡇⠀⠀⠈⠙⢿⡄⠀
⠀⡿⠁⠀⠀⠀⠀⠘⣿⣷⡀⠀⠰⣿⣶⣶⣿⡎⠀⢀⣾⣿⠇⠀⠀⠀⠀⠈⢿⠀
⠀⡇⠀⠀⠀⠀⠀⠀⠹⣿⣷⣄⠀⣿⣿⣿⣿⠀⣠⣾⣿⠏⠀⠀⠀⠀⠀⠀⢸⠀
⠀⠁⠀⠀⠀⠀⠀⠀⠀⠈⠻⢿⢇⣿⣿⣿⣿⡸⣿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠈⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣼⣿⣿⣿⣿⣧⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠐⢤⣀⣀⢀⣀⣠⣴⣿⣿⠿⠋⠙⠿⣿⣿⣦⣄⣀⠀⠀⣀⡠⠂⠀⠀⠀
⠀⠀⠀⠀⠀⠈⠉⠛⠛⠛⠛⠉⠀⠀⠀⠀⠀⠈⠉⠛⠛⠛⠛⠋⠁⠀⠀⠀⠀⠀
`)
            break
    }
})
bot.login(token)