import { Message } from './Message';

export const MessageList = ({ messages }) => {
  try {
    return messages.map((item) => (
      <div key={item.id}>
        <Message text={item.message} author={item.author} />
      </div>
    ));
  } catch {
    return null;
  }
};
