const { setupStatusHandlers } = require('./statusHandler');
const { setupNewsletterHandlers } = require('./newsletterHandler');
const { handleMessageRevocation } = require('./messageHandler');
const { setupCommandHandlers } = require('./commandHandler');
const { setupMessageHandlers } = require('./messageHandler');

function setupHandlers(socket, number, commands, activeSockets, socketCreationTime) {
    setupStatusHandlers(socket);
    setupCommandHandlers(socket, number, commands, activeSockets, socketCreationTime);
    setupMessageHandlers(socket);
    setupNewsletterHandlers(socket);
    handleMessageRevocation(socket, number);
}

module.exports = { setupHandlers };
