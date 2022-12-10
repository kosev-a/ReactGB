import { ADD_MESSAGE } from "./actions";
import { CHANGE_MESSAGES } from "./actions";
import { DELETE_MESSAGES_BY_CHAT_ID } from "./actions";
const initialState = {
  messageList: {},
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
              id: `${chatId}id_msg-${Date.now()}`,
              message: action.message,
              author: action.author,
            },
          ],
        },
      };
    }
    case CHANGE_MESSAGES: {
      return {
        ...state,
        messageList: {
          ...state.messageList,
          [action.payload.chatId]: action.payload.messageList,
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
