const fs = require('fs-extra');
const path = require('path');

function loadCommands() {
    const commands = {};
    const pluginsPath = path.join(__dirname, '../plugins');
    
    if (!fs.existsSync(pluginsPath)) {
        fs.mkdirSync(pluginsPath, { recursive: true });
        return commands;
    }

    const pluginFiles = fs.readdirSync(pluginsPath).filter(file => 
        file.endsWith('.js') && !file.startsWith('_')
    );

    for (const file of pluginFiles) {
        try {
            const commandModule = require(path.join(pluginsPath, file));
            if (commandModule.pattern && commandModule.execute) {
                commands[commandModule.pattern] = commandModule;
                if (commandModule.alias) {
                    commandModule.alias.forEach(alias => {
                        commands[alias] = commandModule;
                    });
                }
                console.log(`✅ Loaded command: ${commandModule.pattern}`);
            }
        } catch (error) {
            console.error(`❌ Failed to load plugin ${file}:`, error);
        }
    }

    return commands;
}

function setupCommandHandlers(socket, number, commands, activeSockets, socketCreationTime) {
    socket.ev.on('messages.upsert', async ({ messages }) => {
        const msg = messages[0];
        if (!msg.message || msg.key.remoteJid === 'status@broadcast') return;

        let command = null;
        let args = [];
        let sender = msg.key.remoteJid;
        let text = '';

        if (msg.message.conversation || msg.message.extendedTextMessage?.text) {
            text = (msg.message.conversation || msg.message.extendedTextMessage.text || '').trim();
        }

        if (text.startsWith(config.PREFIX)) {
            const parts = text.slice(config.PREFIX.length).trim().split(/\s+/);
            command = parts[0].toLowerCase();
            args = parts.slice(1);
        }

        if (!command) return;

        const commandHandler = commands[command];
        if (commandHandler && commandHandler.execute) {
            try {
                await commandHandler.execute({
                    socket,
                    msg,
                    config,
                    args,
                    sender,
                    number,
                    activeSockets,
                    socketCreationTime,
                    commands
                });
            } catch (error) {
                console.error(`Error executing command ${command}:`, error);
                await socket.sendMessage(sender, {
                    text: '❌ An error occurred while processing your command.'
                });
            }
        }
    });
}

module.exports = { loadCommands, setupCommandHandlers };
