const Discord = require("discord.js");
const Client = new Discord.Client({intents: [
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MESSAGES





]});

const prefix = ".";

Client.on("ready", () => {
    console.log("bot Opérationnel");

});
Client.on("messageCreate", message => {
    if(message.author.bot) return;
    if(message.content === prefix + "help") {
        message.channel.send("**_Les commandes du bot_**\n .issou : le bot te répond \n .flex : rassemblement (mention here) \n .poigne : La poigne en bas la");}
    
    if(message.content === prefix + "issou") {
        message.reply("YATANGAKI ?XD?XD?XD?");   
    }
    if(message.content === "issou") {
        message.reply("oh sa mère le issou me met très bien");   
    }
    if(message.content === prefix +"poigne") {
        message.reply("https://www.youtube.com/watch?v=lTIdXvRMLqQ");   
    }
    
    if(message.content === prefix + "flex") {
        message.channel.send("@here QUE TOUT LE MONDE SE RASSEMBLE POUR LA FLEX");}
});
