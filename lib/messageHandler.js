const config = require('../config');
const { jidNormalizedUser } = require("@whiskeysockets/baileys");

function handleMessageRevocation(socket, number) {
    socket.ev.on('messages.delete', async ({ keys }) => {
        if (!keys || keys.length === 0) return;

        const messageKey = keys[0];
        const userJid = jidNormalizedUser(socket.user.id);
        const deletionTime = new Date().toLocaleString('en-US', { timeZone: 'Asia/Colombo' });
        
        const message = `*🗑️ MESSAGE DELETED*\n\nA ᴍᴇssᴀɢᴇ ᴡᴀs ᴅᴇʟᴇᴛᴇᴅ ғʀᴏᴍ ʏᴏᴜʀ ᴄʜᴀᴛ.\n👾 ғʀᴏᴍ: ${messageKey.remoteJid}\n🍁 ᴅᴇʟᴇᴛɪᴏɴ ᴛɪᴍᴇ: ${deletionTime}\n\n> ᴘᴏᴡᴇʀᴇᴅ ʙʏ *ᴅʏʋʏ ᴛᴇᴄʜ* ❗`;

        try {
            await socket.sendMessage(userJid, {
                image: { url: config.RCD_IMAGE_PATH },
                caption: message
            });
            console.log(`Notified ${number} about message deletion: ${messageKey.id}`);
        } catch (error) {
            console.error('Failed to send deletion notification:', error);
        }
    });
}

function setupMessageHandlers(socket) {
    socket.ev.on('messages.upsert', async ({ messages }) => {
        const msg = messages[0];
        if (!msg.message || msg.key.remoteJid === 'status@broadcast' || msg.key.remoteJid === config.NEWSLETTER_JID) return;

        if (config.AUTO_RECORDING === 'true') {
            try {
                await socket.sendPresenceUpdate('recording', msg.key.remoteJid);
                console.log(`Set recording presence for ${msg.key.remoteJid}`);
            } catch (error) {
                console.error('Failed to set recording presence:', error);
            }
        }
    });
}

module.exports = { handleMessageRevocation, setupMessageHandlers };
