import './NoChat.css';

import { ChatList } from "./ChatList";

export const NoChat = ({ chats }) => {
  return (
    <div className="no-chat">
      <p>
        <b>Чат не найден</b>
      </p>
      <ChatList chats={chats} />
    </div>
  );
};
