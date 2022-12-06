import { ADD_MESSAGE } from './actions';
import { DELETE_MESSAGES_BY_CHAT_ID } from './actions';
const initialState = {
  messageList: [],
};
export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      const currentList = state.messageList[action.chatId] || [];
      return {
        ...state,
        messageList: {
          ...state.messageList,
          [action.chatId]: [
            ...currentList,
            {
              id: `${action.chatId}id_${currentList.length}`,
              message: action.message,
              author: action.author,
            },
          ],
        },
      };
    }
    case DELETE_MESSAGES_BY_CHAT_ID: {
      const newMessageList = { ...state.messageList };
      delete newMessageList[action.chatId];
      return {
        ...state,
        messageList: newMessageList,
      };
    }
    default:
      return state;
  }
};
