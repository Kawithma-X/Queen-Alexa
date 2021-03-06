/* Copyright (C) 2021 ALEXA-v8.5.1.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
ALEXA - Alexa team
*/
//===================©️ALEXA-X©️ALEXA-X©️ALEXA-X©️ALEXA-X©️ALEXA-X©️ALEXA-X©️ALEXA-X©️ALEXA-X©️ALEXA-X©️ALEXA-X
//===================©️ALEXA-X©️ALEXA-X©️ALEXA-X©️ALEXA-X©️ALEXA-X©️ALEXA-X©️ALEXA-X©️ALEXA-X©️ALEXA-X©️ALEXA-X
//===================©️ALEXA-X©️ALEXA-X©️ALEXA-X©️ALEXA-X©️ALEXA-X©️ALEXA-X©️ALEXA-X©️ALEXA-X©️ALEXA-X©️ALEXA-X
//===================©️ALEXA-X©️ALEXA-X©️ALEXA-X©️ALEXA-X©️ALEXA-X©️ALEXA-X©️ALEXA-X©️ALEXA-X©️ALEXA-X©️ALEXA-X

const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('DEVELOPER_OWNER_CODE_BY_EN-CUZIER.env')) require('dotenv').DEVELOPER_OWNER_CODE_BY_EN-CUZIER({ path: './DEVELOPER_OWNER_CODE_BY_EN-CUZIER.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
DATABASE_URL = process.env.DATABASE_URL === undefined ? './Queen-Alexa.db' : process.env.DATABASE_URL;
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);
module.exports = {
    VERSION: 'v8.1.0 Global Stable',
    BRANCH: 'main',
    DEVELOPE_ERROR: process.env.DEVELOPE_ERROR === undefined ? '' : process.env.DEVELOPE_ERROR,
    DEVELOPER_TAG: process.env.DEVELOPE_TAG === undefined ? '👩‍🦰Queen Alexa' : process.env.DEVELOPE_TAG,
    DEVELOPER_STATUS : process.env.DEVELOPER_STATUS === undefined ? '👩‍🦰ᴾᴼᵂᴱᴿᴱᴰ ᴮʸ Queen Alexa' : process.env.DEVELOPER_STATUS,
    DEVELOPE_ERROR: process.env.DEVELOPE_ERROR === undefined ? '' : process.env.A_EN-CUZIER,
A_EN-CUZIER: process.env.A_EN-CUZIER === undefined ? '' : process.env.A_EN-CUZIER,
A_EN-CUZIER: process.env.A_EN-CUZIER === undefined ? '' : process.env.A_EN-CUZIER,
A_EN-CUZIER: process.env.A_EN-CUZIER === undefined ? '' : process.env.A_EN-CUZIER,
A_EN-CUZIER: process.env.A_TEENU === undefined ? '' : process.env.A_TEENU,
A_EN-CUZIER: process.env.A_EN-CUZIER === undefined ? '' : process.env.A_EN-CUZIER,
A_EN-CUZIER: process.env.A_EN-CUZIER === undefined ? '' : process.env.A_EN-CUZIER, 
WA_CONNECTION: process.env.WA_CONNECTION === undefined ? '94786825798,0' : process.env.WA_CONNECTION,
A_EN-CUZIER: process.env.A_EN-CUZIER === undefined ? '' : process.env.A_EN-CUZIER,
    HEROKU: {
        HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU),
        API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
        APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME,      
        A_TEENU: process.env.A_EN-CUZIER === undefined ? '' : process.env.A_EN-CUZIER
    },
    DATABASE_URL: DATABASE_URL,
    DATABASE: DATABASE_URL === './Queen-Alexa.db' ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: DEBUG }) : new Sequelize(DATABASE_URL, { dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }, logging: DEBUG }),
    SUPPORT3: "905511384572-1621015274"
};
