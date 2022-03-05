// const getStatus = require('./getStatus.js')
require('dotenv').config();
const { Client, Intents, MessageEmbed } = require('discord.js');
const axios = require('axios');

const client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGES"], partials: ["CHANNEL"] });
const channelID = `949430815522189372`;

client.on('ready', () => {
    // client.channels.fetch('841034711412506645')
    //   .then(channel => console.log(channel.send('2')));
    // client.channels.cache.get(channelID).send(`tested`);
    // getStatus(statuses);
});

client.on('messageCreate', async message => {
    return
    if (message.author.bot) return;
    client.channels.cache.get(`917053565799899161`).send('Loading...')
    await axios.get('https://api.helium.io/v1/hotspots/112mC2nJJzsFUeefscBi5kvX77AKqksivCYt48WuXEi27Srwy2WY').then(response=>{
        const result = response?.data?.data;
        
        const exampleEmbed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle(`${result?.name}`)
            .setURL('https://discord.js.org/')
            .setAuthor({ name: result?.status?.online, iconURL: 'https://i.imgur.com/AfFp7pu.png'})
            .setDescription('Some description here')
            .setThumbnail('https://i.imgur.com/AfFp7pu.png')
            .addFields(
                { name: 'Regular field title', value: 'Some value here' },
                { name: '\u200B', value: '\u200B' },
                { name: 'Inline field title', value: 'Some value here', inline: true },
                { name: 'Inline field title', value: 'Some value here', inline: true },
            )
            // .addField('Inline field title', 'Some value here', true)
            // .setImage('https://i.imgur.com/AfFp7pu.png')
            // .setTimestamp()
            // .setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

            client.channels.cache.get(`917053565799899161`).send({ embeds: [exampleEmbed] });
        
        // client.channels.cache.get(`841034711412506645`).send('async done')
    })
    
})
client.on('message', (message) => {
    
    if(message.content.includes('baro')){
        message.reply(`https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}`)
    }
});

// let channel = client.channels.cache.get('841034745899253822')
// console.log(channel)
// channel.join(connection => {
//     console.log("Starting")
//     mp3("speech.mp3", function (err, duration) {
//         if (err) return console.log(err);
//         console.log("File duration:" + duration * 1000 + "ms")
//         repeat(connection, duration)
//     })
// }).catch(console.error)



client.login(process.env.DISCORDJS_BOT_TOKEN);
