import { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { ChatList } from "./ChatList";
import { Form } from '../components/Form';
import '../App.css';

export const initialChats = [
  {
    id: 1,
    name: "Chat1",
    messages: [{ text: "FirstMessage", author: "Alex" }],
  },
  {
    id: 2,
    name: "Chat2",
    messages: [{ text: "SomeMessage", author: "Mike" }],
  },
  {
    id: 3,
    name: "Chat3",
    messages: [{ text: "Привет!", author: "Liza" }],
  },
];

export const Chats = () => {
  const { chatId } = useParams();
  const [chats, setChats] = useState(initialChats);

  if (!chatId || !chats.find((item) => item.id == chatId)) {
    return <Navigate to="/nochat" />;
  }

  return (
    <div className="wrapper">
      <ChatList chats={chats} />
      <Form />
    </div>
  );
};
