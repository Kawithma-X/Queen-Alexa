/* Copyright (C) 2021 ALEXA-v8.5.1.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
ALEXA - Alexa team
*/

const chalk = require('chalk');
const {WAConnection, MessageOptions, MessageType} = require('@adiwajshing/baileys');
const {StringSession} = require('./Queen-Alexa/');
const fs = require('fs');

async function Queen-Alexa () {
    const conn = new WAConnection();
    const Session = new StringSession();  
    conn.version = [2, 2140, 12]
    conn.logger.level = 'warn';
    conn.regenerateQRIntervalMs = 50000;
    
    conn.on('connecting', async () => {
        console.log(`${chalk.green.bold('Queen-Alexa')}${chalk.blue.bold('Alexa')}
${chalk.white.italic('Queen-Alexa QR session')}

${chalk.blue.italic('ℹ️  Connecting to Whatsapp... Please Wait.')}`);
    });
    

    conn.on('open', async () => {
        var st = Session.createStringSession(conn.base64EncodedAuthInfo());
        console.log(
            chalk.green.bold('QUEEN-ALEXA SESSION: '), Session.createStringSession(conn.base64EncodedAuthInfo())
        );
        
        if (!fs.existsSync('config.env')) {
            fs.writeFileSync('config.env', `QUEEN_NEUTRO_SESSION="${st}"`);
        }
        if (conn.user.jid.startsWith('94')) {
            await conn.sendMessage(conn.user.jid,st, MessageType.text)
            await conn.sendMessage(conn.user.jid,'*©️සාර්තකයි. මෙම කේතය අන් අය සමග බෙදානොගන්න.*', MessageType.text)
            console.log(
                chalk.blue.bold('installing Node js')
            );
        }
        else {
            await conn.sendMessage(conn.user.jid,st, MessageType.text)
            await conn.sendMessage(conn.user.jid,'*Do Not Share This Code With Anyone!*', MessageType.text)
            console.log(
                chalk.blue.bold('If you are installing locale, you can start the bot with node alexa.js')
            );
        }
        
        process.exit(0);
    });

    await conn.connect();
}

Queen-Alexa()