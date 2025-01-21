const express=require('express')
const mongoose=require('mongoose')
const { Client, GatewayIntentBits } = require('discord.js');
const {mdbConnection}=require('./connection')
const url=require('./models/data')
require('dotenv').config();
mdbConnection("mongodb://localhost:27017/shortid")
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

const token = process.env.DISCORD_TOKEN;

client.once('ready', () => {
    console.log('Bot is online!');
});

client.on('messageCreate',async(message) => {
    console.log(message.content, message.author.username, message.author.globalName);
    if (message.author.bot) return;
    else if (message.content.startsWith('create')) {
        const redirectlink=message.content.split('create ')[1];
        const shortidfound= await url.findOne({redirecturl:redirectlink});
        if(shortidfound){
            return message.reply({
                content: `Generating short ID for: ${redirectlink}\nShort ID: ${shortidfound.shortid}`,
            });
        }
        return message.reply({
            content: "shortid not found",
        });

    }
    message.reply({
        content:'I am a bot!'
});
    // message.author.send('I am a bot!');
});
client.on('interactionCreate', (interaction) => {
    // console.log(interaction);
    interaction.reply('pong!');
});
client.login(token);

