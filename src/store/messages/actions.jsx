import { db } from "../../services/firebase";
import { messagesRef } from "../../services/firebase";
import {
  push,
  onChildAdded,
  onChildChanged,
  ref,
  set,
} from "firebase/database";

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
  const messageList = [];

  snapshot.forEach((mes) => {
    messageList.push(mes.val());
  });

  return { chatId: snapshot.key, messageList };
};

export const initMessageTracking = () => (dispatch) => {
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
};

export const deleteMessageWithFirebase = (chatId, messageId) => async () => {
  ref(db, "messages").child(chatId).child(messageId).remove();
};
