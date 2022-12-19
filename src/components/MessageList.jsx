import { remove } from "firebase/database";
import { useDispatch } from "react-redux";
import { messagesRef } from "../services/firebase";
import { deleteMessageWithFirebase } from "../store/messages/actions";
import { Message } from "./Message";

export const MessageList = ({ messages }) => {
  const dispatch = useDispatch();
  const handleDelete = (messageId) => {
    dispatch(deleteMessageWithFirebase(messageId));
    // remove(messagesRef + '/' + messageId);
  };
  try {
    return messages.map((item) => (
      <div key={item.id}>
        <Message text={item.message} author={item.author} />
        <span className="remove-msg" onClick={() => handleDelete(item.id)}>
          Remove Message
        </span>
      </div>
    ));
  } catch {
    return null;
  }
};
