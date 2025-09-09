const config = require('../config');

module.exports = {
    pattern: "menu",
    alias: ["allmenu", "help", "shadow"],
    desc: "Show command menu",
    category: "general",
    execute: async ({ socket, msg, config, number, socketCreationTime, activeSockets }) => {
        const startTime = socketCreationTime.get(number) || Date.now();
        const uptime = Math.floor((Date.now() - startTime) / 1000);
        const hours = Math.floor(uptime / 3600);
        const minutes = Math.floor((uptime % 3600) / 60);
        const seconds = Math.floor(uptime % 60);

        const caption = `
╭───〘 *𝐒𝐇𝐀𝐃𝐎𝐖 𝐁𝐎𝐓* 〙───❏
│ *ɴᴀᴍᴇ*: sʜᴀᴅᴏᴡ ᴍɪɴɪ ʙᴏᴛ
│ *ᴏᴡɴᴇʀ*: ᴅʏʙʏ ᴛᴇᴄʜ
│ *ᴠᴇʀsɪᴏɴ*: 0.0001+
│ *ᴀᴄᴛɪᴠᴇ sᴇssɪᴏɴs: ${activeSockets.size}*
│ *ᴘʟᴀᴛғᴏʀᴍ*: ʜᴇʀᴏᴋᴜ
│ *ᴜᴘᴛɪᴍᴇ*: ${hours}ʜ ${minutes}ᴍ ${seconds}s
╰─────────────────────❏

╭───〘 🫩 𝐌𝐀𝐈𝐍 𝐌𝐄𝐍𝐔 🫩 〙───❏
│ ᴀʟɪᴠᴇ    
│ sʏsᴛᴇᴍ  
│ owner
│ ᴘɪɴɢ  
│ ʀᴜɴᴛɪᴍᴇ
│ sᴄʀɪᴘᴛ
│ ᴛᴇsᴛ
╰───────────────────❏

╭───〘  GROUP 𝐌𝐄𝐍𝐔 〙───❏
│ ᴛᴀɢᴀʟʟ  
│ ʜɪᴅᴇᴛᴀɢ
│ ᴋɪᴄᴋᴀʟʟ
│ ɪɴᴠɪᴛᴇ
│ ʀᴇᴠᴏᴋᴇ  
╰───────────────────❏

╭───〘  𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐌𝐄𝐍𝐔 〙───❏
│ sᴏɴɢ  
│ ғᴀᴄᴇʙᴏᴏᴋ
│ ᴛɪᴋᴛᴏᴋ
│ ᴠɪᴅᴇᴏ  
╰───────────────────❏

╭──〘  𝐓𝐎𝐎𝐋𝐒 𝐌𝐄𝐍𝐔  〙───❏
│ ғᴀɴᴄʏ
│ ᴊɪᴅ
│ ɢᴇᴛᴘᴘ
│ ɴᴇᴡsʟᴇᴛᴛᴇʀ
╰───────────────────❏
        `;

        await socket.sendMessage(msg.key.remoteJid, {
            image: { url: config.IMAGE_PATH },
            caption: caption,
            footer: config.BOT_FOOTER
        });
    }
};
