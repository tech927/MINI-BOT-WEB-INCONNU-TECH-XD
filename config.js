const fs = require('fs-extra');

const config = {
    AUTO_VIEW_STATUS: 'true',
    AUTO_LIKE_STATUS: 'true',
    AUTO_RECORDING: 'true',
    AUTO_LIKE_EMOJI: ['❗', '👾', '🪄', '💓', '🎈', '♻️', '👻', '🥺', '🚀', '🔥'],
    PREFIX: '.',
    MAX_RETRIES: 3,
    IMAGE_PATH: 'https://files.catbox.moe/76gwuj.jpg',
    BOT_FOOTER: '© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅʏʙʏ ᴛᴇᴄʜ',
    GROUP_INVITE_LINK: 'https://chat.whatsapp.com/IZ5klCZ038yEx4aoy6Be2y?mode=ac_t',
    ADMIN_LIST_PATH: './admin.json',
    RCD_IMAGE_PATH: './dyby.jpg',
    NEWSLETTER_JID: '120363401051937059@newsletter',
    NEWSLETTER_MESSAGE_ID: '428',
    OTP_EXPIRY: 300000,
    OWNER_NUMBER: '221786026985',
    CHANNEL_LINK: 'https://whatsapp.com/channel/0029VbAdcIXJP216dKW1253g',
    BUTTON_IMAGES: {
        ALIVE: 'https://files.catbox.moe/76gwuj.jpg',
        MENU: 'https://files.catbox.moe/76gwuj.jpg'
    }
};

module.exports = config;
