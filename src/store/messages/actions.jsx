export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';

export const addMessage = (chatId, message, author) => ({
  type: ADD_MESSAGE,
  chatId,
  message,
  author,
});

export const addMessageWithThunk =
  (chatId, message) => (dispatch, getState) => {
    dispatch(addMessage(chatId, message));
    if (message.author !== 'bot') {
      const botMessage = 'Мы скоро свяжемся с Вами';
      const author = 'bot';
      setTimeout(() => dispatch(addMessage(chatId, botMessage, author)), 1500);
    }
  };

export const DELETE_MESSAGES_BY_CHAT_ID = 'MESSAGES::DELETE_MESSAGE_BY_CHAT_ID';

export const deleteMessageByChatId = (chatId) => ({
  type: DELETE_MESSAGES_BY_CHAT_ID,
  chatId,
});
