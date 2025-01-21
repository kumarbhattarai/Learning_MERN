const { REST, Routes }= require('discord.js');
require('dotenv').config();
const commands = [
    {
        name: 'ping',
        description: 'Replies with Pong!',
    },
];
const token = process.env.DISCORD_TOKEN;
const clintid=process.env.CLIENT_ID
const rest = new REST({ version: '10' }).setToken(token);

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(
            Routes.applicationCommands(clintid),
            { body: commands },
        );

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();