const Discord = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const Client = new Discord.Client({intents: [
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MESSAGES,
    Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS



]});
const data = new SlashCommandBuilder()
    .setName("ping")
    .setDescription("renvoie pong");


const prefix = ".";

Client.on("ready", () => {
    Client.application.commands.create(data);
    console.log("bot Opérationnel");
    

});
Client.on("messageCreate", message => {
    if(message.author.bot) return;
    if(message.content === prefix + "help") {
        const embed = new Discord.MessageEmbed()
            .setColor("#0099ff")
            .setTitle("Liste des commandes")
            .setURL("https://discord.js.org/")
            .setAuthor({ name: 'Aow ディオ#9953', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
            .setDescription("Voici la liste des commandes du bot")
            .setThumbnail("https://c.tenor.com/tVrkM5XhW-EAAAAC/flick-esfand.gif")
            .setImage("https://epic7x.com/wp-content/uploads/2020/11/Operator-Sigret.png")
            .setTimestamp()
            .setFooter({ text: 'SHEEEEEEEEEEEESH---Dédé', iconURL: 'https://i.imgur.com/AfFp7pu.png' })
            .addField("__.help__", "Affiche la liste des commandes")
            .addField("__.friday__", "Friday Night")
            .addField("__.flex__", "Flex Rassemblement ! ( mention rôle @flex)")
            .addField("__.jeux__", "En cours de construction")
            .addField("__.clear 1-100__", "supprime x message(s) ex : clear 20");
            
        message.channel.send({embeds: [embed]});
    
    }
    
    if(message.content.includes("issou")) {
        message.channel.send("Yatangaki");   
    }
    if(message.content.endsWith("quoi")) {
        message.channel.send("feur");   
    }
    if(message.content.endsWith("QUOI")) {
        message.channel.send("feur");   
    }
    if(message.content.endsWith("quoi ?")) {
        message.channel.send("feur");   
    }
    if(message.content.includes("susma")) {
        message.reply("Le susma quoi ? :o"); 
    }
    if(message.content.includes("ligma")) {
        message.reply("Le ligma quoi ? :o"); 
    }
    if(message.content.includes("bebou")) {
        message.channel.send("UwU"); 
    }
    if(message.content.includes("UwU")) {
        message.channel.send(" :flushed: :point_right: :point_left: "); 
    }
    if(message.content.includes("snail")) {
        message.channel.send(" :snail: "); 
    }
    if(message.content.includes("SHE")) {
        message.channel.send(" :cold_face: :cold_face:  "); 
    }
    if(message.content.includes("kouizine")) {
        message.channel.send("https://tenor.com/view/couizine-ta-place-cest-la-couizine-la-place-de-la-femme-cuisine-gif-18706521 "); 
    }
    if(message.content.includes("poigne")) {
        message.channel.send("https://www.youtube.com/watch?v=lTIdXvRMLqQ");   
    }
    if(message.content === prefix +"friday") {
        message.channel.send("https://cdn.discordapp.com/attachments/810647587014967307/837587440045785128/repostFridayNightOG.mp4");   
    }
    
    if(message.content === prefix + "flex") {
        message.channel.send("<@&934087092525486140>" + " QUE TOUT LE MONDE SE RASSEMBLE POUR LA FLEX");}
});

Client.on("interactionCreate", interaction => {
if(interaction.isCommand()) {
    if(interaction.commandName === "ping"){
        interaction.reply("pong");
    }
}
});

Client.on("guildMemberAdd" ,member => {
    console.log("Un membre est arrivé.");
    Client.channels.cache.get("818929750567288863").send("<@" + member.id + "> Bievenue ma petite caillasse.");
});
Client.on("guildMemberRemove", member => {
    console.log("un membre a quitté le serveur.");
    Client.channels.cache.get("818929750567288863").send("<@" + member.id + "> Aurevoir mon bichon.");
});

Client.on("messageCreate", message => {
    if(message.author.bot) return;
    if(message.content === prefix + "jeux") {
    var embed1 = new Discord.MessageEmbed()
        .setColor("#48C9B0")
        .setTitle("Bienvenue dans mon premier jeux !")
        .setTimestamp()
        .setImage("https://pbs.twimg.com/profile_images/1016206191268122624/wDz8eTiO_400x400.jpg")
        .addFields(
            { name: 'Jeux du prout', value: 'Description du prout' },
            { name: '\u200B', value: '\u200B' },
            { name: 'Veuillez insérer un prout', value: 'nous récoltons un maximum de prout', inline: true },
            { name: 'Encore une fois', value: 'pet bonus', inline: true },
        );
    
        message.channel.send({ embeds: [embed1] });
    }
});
Client.on("message" , message => {
    if(message.author.bot) return;
    if(message.member.permissions.has("MANAGE_MESSAGES")) {
        if(message.content.startsWith(prefix + "clear")) {
            let args = message.content.split(" ");

            if(args[1] == undefined){
                message.reply("définissez un nombre de message entre 1 et 100 à supprimer ou touche ma poigne");
            }
            else {
                let number = parseInt(args[1]);
                
                if(isNaN(number)){
                    message.reply("Ton nombre de message est mal défini")
                }
                else {
                    message.channel.bulkDelete((number) +1, true).then(messages => {
                        console.log("Suppression de "+(messages.size -1)+ " messages réussi !")
                        message.channel.send("Suppression de "+(messages.size -1)+ " messages réussi !");
                        
                    }).catch(err => {
                        console.log("Erreur lors du clear +" +err);
                    });
                }
            }
        }
    }

});
    




Client.login(process.env.TOKEN);
