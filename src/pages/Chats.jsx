import { useParams, Navigate } from "react-router-dom";
import { ChatList } from "./ChatList";
import "../App.css";
import { shallowEqual, useSelector } from "react-redux";
import { MessageList } from "../components/MessageList";
import { Form } from "../components/Form";
import { getChatList } from "../store/chats/selectors";
import { getMessageList } from "../store/messages/selectors";

export const Chats = () => {
  const { chatId } = useParams();
  const chats = useSelector(getChatList, shallowEqual);
  const messages = useSelector(getMessageList, shallowEqual);
  if (!chatId || !chats.find((item) => item.id == chatId)) {
    return <Navigate to="/nochat" />;
  }

  return (
    <>
      <ChatList chats={chats} />
      <MessageList messages={messages[chatId]} />
      <div className="form">
        <Form />
      </div>
    </>
  );
};
