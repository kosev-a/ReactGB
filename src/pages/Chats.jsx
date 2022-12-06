import { useParams, Navigate } from 'react-router-dom';
import { ChatList } from './ChatList';
import '../App.css';
import { shallowEqual, useSelector } from 'react-redux';
import { MessageList } from '../components/MessageList';
import { FormContainer } from '../components/FormContainer';
import { getChatList } from '../store/chats/selectors';
import { getMessageList } from '../store/messages/selectors';
import { Form } from '../components/Form';
import './Chats.css';

export const Chats = () => {
  const { chatId } = useParams();
  const chats = useSelector(getChatList, shallowEqual);
  const messages = useSelector(getMessageList, shallowEqual);
  if (!chatId || !chats.find((item) => item.id == chatId)) {
    return <Navigate to="/nochat" />;
  }

  return (
    <div>
      <div className="wrapper">
        <ChatList />
        <div className="messages">
          <Form />
          <MessageList messages={messages[chatId]} />
        </div>
      </div>
      <div className="form">
        <FormContainer />
      </div>
    </div>
  );
};
