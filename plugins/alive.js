const config = require('../config');

module.exports = {
    pattern: "alive",
    alias: ["online", "bot"],
    desc: "Check if the bot is alive",
    category: "general",
    execute: async ({ socket, msg, config, number, socketCreationTime }) => {
        const startTime = socketCreationTime.get(number) || Date.now();
        const uptime = Math.floor((Date.now() - startTime) / 1000);
        const hours = Math.floor(uptime / 3600);
        const minutes = Math.floor((uptime % 3600) / 60);
        const seconds = Math.floor(uptime % 60);

        const title = '𝐒𝐇𝐀𝐃𝐎𝐖 𝐌𝐈𝐍𝐈 𝐁𝐎𝐓 𝐀𝐋𝐈𝐕𝐄 𝐍𝐎𝐖 👾';
        const content = `*sʜᴀᴅᴏᴡ ᴍɪɴɪ ʙᴏᴛ ʙʏ ᴅʏʙʏ ᴛᴇᴄʜ*\n` + 
                       `*ʙᴏᴛ ᴏᴡɴᴇʀ :- ᴅʏʙʏ ᴛᴇᴄʜ*\n` +
                       `*ʙᴏᴛ ɴᴀᴍᴇ :- sʜᴀᴅᴏᴡ ᴍɪɴɪ ʙᴏᴛ ᴠ1*\n` +
                       `*ʙᴏᴛ ᴡᴇʙ ꜱɪᴛᴇ*\n` +
                       `> *ᴄᴏᴍɪɴɢ ꜱᴏᴏɴ*`;

        await socket.sendMessage(msg.key.remoteJid, {
            image: { url: config.IMAGE_PATH },
            caption: `*${title}*\n\n${content}\n\n> *${config.BOT_FOOTER}*`
        });
    }
};
