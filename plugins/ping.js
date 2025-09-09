const { delay } = require("@whiskeysockets/baileys");

module.exports = {
    pattern: "ping",
    alias: ["pong", "speed"],
    desc: "Check bot response speed",
    category: "general",
    execute: async ({ socket, msg }) => {
        const initial = new Date().getTime();
        const pingMessage = await socket.sendMessage(msg.key.remoteJid, { text: '*_ᴘɪɴɢɪɴɢ..._* ❗' });
        const final = new Date().getTime();
        
        await socket.sendMessage(msg.key.remoteJid, { text: '《 █▒▒▒▒▒▒▒▒▒▒▒》10%', edit: pingMessage.key });
        await delay(200);
        await socket.sendMessage(msg.key.remoteJid, { text: '《 ████▒▒▒▒▒▒▒▒》30%', edit: pingMessage.key });
        await delay(200);
        await socket.sendMessage(msg.key.remoteJid, { text: '《 ███████▒▒▒▒▒》50%', edit: pingMessage.key });
        await delay(200);
        await socket.sendMessage(msg.key.remoteJid, { text: '《 ██████████▒▒》80%', edit: pingMessage.key });
        await delay(200);
        await socket.sendMessage(msg.key.remoteJid, { text: '《 ████████████》100%', edit: pingMessage.key });
        await delay(200);

        await socket.sendMessage(msg.key.remoteJid, {
            text: `*ᴘᴏɴɢ ${final - initial} ᴍs*`,
            edit: pingMessage.key
        });
    }
};
