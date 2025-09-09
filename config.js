const fs = require('fs-extra');

const config = {
    AUTO_VIEW_STATUS: 'true',
    AUTO_LIKE_STATUS: 'true',
    AUTO_RECORDING: 'true',
    AUTO_LIKE_EMOJI: ['❗', '👾', '🪄', '💓', '🎈', '♻️', '👻', '🥺', '🚀', '🔥'],
    PREFIX: '.',
    MAX_RETRIES: 3,
    IMAGE_PATH: 'https://files.catbox.moe/bm2v7m.jpg',
    BOT_FOOTER: '© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅʏʙʏ ᴛᴇᴄʜ',
    GROUP_INVITE_LINK: 'https://chat.whatsapp.com/JlI0FDZ5RpAEbeKvzAPpFt?mode=ems_copy_t',
    ADMIN_LIST_PATH: './admin.json',
    RCD_IMAGE_PATH: './dyby.jpg',
    NEWSLETTER_JID: '120363401051937059@newsletter',
    NEWSLETTER_MESSAGE_ID: '428',
    OTP_EXPIRY: 300000,
    OWNER_NUMBER: '221786026985',
    CHANNEL_LINK: 'https://whatsapp.com/channel/0029Vb6T8td5K3zQZbsKEU1R',
    BUTTON_IMAGES: {
        ALIVE: 'https://files.catbox.moe/bm2v7m.jpg',
        MENU: 'https://files.catbox.moe/bm2v7m.jpg'
    }
};

module.exports = config;
