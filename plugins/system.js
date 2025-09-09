module.exports = {
    pattern: "system",
    alias: ["sysinfo", "info"],
    desc: "Show system information",
    category: "general",
    execute: async ({ socket, msg, config, number, socketCreationTime }) => {
        const startTime = socketCreationTime.get(number) || Date.now();
        const uptime = Math.floor((Date.now() - startTime) / 1000);
        const hours = Math.floor(uptime / 3600);
        const minutes = Math.floor((uptime % 3600) / 60);
        const seconds = Math.floor(uptime % 60);
            
        const title = '*𝐒𝐇𝐀𝐃𝐎𝐖 𝐌𝐈𝐍𝐈-𝐁𝐎𝐓*';
        const content = `┏━━━━━━━━━━━━━━━━\n` +
            `┃🤖 \`ʙᴏᴛ ɴᴀᴍᴇ\` : sʜᴀᴅᴏᴡ ᴍɪɴɪ-ʙᴏᴛ\n` +
            `┃🔖 \`ᴠᴇʀsɪᴏɴ\` : ᴍɪɴɪ\n` +
            `┃📡 \`ᴘʟᴀᴛᴏʀᴍ\` : ʜᴇʀᴏᴋᴜ\n` +
            `┃🪢 \`ʀᴜɴᴛɪᴍᴇ\` : ${hours}ʜ ${minutes}ᴍ ${seconds}s\n` +
            `┃👨‍💻 \`ᴏᴡɴᴇʀ\` : ᴅʏʋʏ ᴛᴇᴄʜ\n` +
            `┗━━━━━━━━━━━━━━━━`;

        await socket.sendMessage(msg.key.remoteJid, {
            image: { url: config.IMAGE_PATH },
            caption: `*${title}*\n\n${content}\n\n> *${config.BOT_FOOTER}*`
        });
    }
};
