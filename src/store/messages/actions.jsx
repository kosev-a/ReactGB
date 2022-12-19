import { messagesRef } from "../../services/firebase";
import {
  push,
  onChildAdded,
  onChildChanged,
  remove,
  set,
  onValue,
  onChildRemoved,
} from "firebase/database";
import { getMessageByIdRef } from "../../services/firebase";

export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";
export const CHANGE_MESSAGES = "MESSAGES::CHANGE_MESSAGES";
export const DELETE_MESSAGES_BY_CHAT_ID = "MESSAGES::DELETE_MESSAGE_BY_CHAT_ID";

export const addMessage = (chatId, message, author) => ({
  type: ADD_MESSAGE,
  chatId,
  message,
  author,
});

export const addMessageWithThunk =
  (chatId, message) => (dispatch, getState) => {
    dispatch(addMessage(chatId, message));
    if (message.author !== "bot") {
      const botMessage = "Мы скоро свяжемся с Вами";
      const author = "bot";
      setTimeout(() => dispatch(addMessage(chatId, botMessage, author)), 1500);
    }
  };

export const deleteMessageByChatId = (chatId) => ({
  type: DELETE_MESSAGES_BY_CHAT_ID,
  chatId,
});

const getMessagesFromSnapshot = (snapshot) => {
  let newMsgs = {};
  onValue(messagesRef, (snapshot) => {
    const data = snapshot.val();
    if (data) {
      newMsgs = Object.entries(data).map((item) => ({
        id: item[0],
        ...item[1],
      }));
    }
  });
  return newMsgs;
};

export const addMessageWithFirebase = (chatId, message, author) => async () => {
  push(messagesRef, {
    chatId,
    message,
    author,
  });
};

export const initMessageTracking = (snapshot) => (dispatch) => {
  onChildAdded(messagesRef, (snapshot) => {
    const payload = getMessagesFromSnapshot(snapshot);
    dispatch({
      type: CHANGE_MESSAGES,
      payload,
    });
  });

  onChildChanged(messagesRef, (snapshot) => {
    const payload = getMessagesFromSnapshot(snapshot);
    dispatch({
      type: CHANGE_MESSAGES,
      payload,
    });
  });

  onChildRemoved(messagesRef, (snapshot) => {
    const payload = getMessagesFromSnapshot(snapshot);
    dispatch({
      type: CHANGE_MESSAGES,
      payload,
    });
  });
};

export const deleteMessageWithFirebase = (messageId) => async () => {
  remove(getMessageByIdRef(messageId));
};
