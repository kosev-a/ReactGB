import { ADD_CHAT } from './actions';
import { DELETE_CHAT } from './actions';

const initialState = {
  chatList: [
    {
      id: 'chat1',
      name: 'Chat1',
    },
    {
      id: 'chat2',
      name: 'Chat2',
    },
    {
      id: 'chat3',
      name: 'Chat3',
    },
  ],
};

export const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHAT:
      return {
        ...state,
        chatList: [
          ...state.chatList,
          {
            id: `chat${state.chatList.length + 1}`,
            name: action.name,
          },
        ],
      };
    case DELETE_CHAT:
      const newChatList = state.chatList.filter(
        (chat) => chat.id !== action.chatId
      );
      return {
        ...state,
        chatList: newChatList,
      };
    default:
      return state;
  }
};
