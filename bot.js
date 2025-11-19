const wppconnect = require('@wppconnect-team/wppconnect');
const axios = require('axios');

wppconnect.create({
    session: 'bot-whatsapp',
    mkdirFolderToken: true,
    puppeteerOptions: { headless: true }
}).then(client => {
    client.onMessage(async message => {
        await axios.post('https://n8n-2-dwr9.onrender.com/webhook/whatsapp', {
            from: message.from,
            body: message.body
        });
    });
});