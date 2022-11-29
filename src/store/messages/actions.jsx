export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';

export const addMessage = (chatId, message, author) => ({
    type: ADD_MESSAGE,
    chatId,
    message,
    author,
});

export const DELETE_MESSAGES_BY_CHAT_ID = 'MESSAGES::DELETE_MESSAGE_BY_CHAT_ID';

export const deleteMessageByChatId = (chatId) => ({
    type: DELETE_MESSAGES_BY_CHAT_ID,
    chatId,
});