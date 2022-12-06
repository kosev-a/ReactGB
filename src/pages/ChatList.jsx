import { Link } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addChat } from '../store/chats/actions';
import { deleteChat } from '../store/chats/actions';
import { deleteMessageByChatId } from '../store/messages/actions';
import { getChatList } from '../store/chats/selectors';

export const ChatList = () => {
  const chats = useSelector(
    getChatList,
    (prev, next) => prev.length === next.length
  );
  const [visible, setVisible] = useState(false);
  const [newChatName, setNewChatName] = useState('');
  const dispatch = useDispatch();
  const handleClose = () => setVisible(false);
  const handleOpen = () => setVisible(true);
  const handleChange = (e) => setNewChatName(e.target.value);

  const onAddChat = () => {
    dispatch(addChat(newChatName));
    setNewChatName('');
    handleClose();
  };

  const handleDelete = (chatId) => {
    dispatch(deleteChat(chatId));
    dispatch(deleteMessageByChatId(chatId));
  };

  return (
    <div>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        sx={{
          width: '150px',
        }}
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Список чатов
          </ListSubheader>
        }
      >
        {chats.map((chat) => (
          <ListItem
            key={chat.id}
            sx={{
              width: '150px',
              bgcolor: 'green',
              padding: '0px',
              margin: '10px',
            }}
          >
            <ListItemButton>
              <Link to={`/chats/${chat.id}`} style={{ textDecoration: 'none' }}>
                <ListItemText
                  primary={chat.name}
                  sx={{
                    color: 'white',
                  }}
                />
              </Link>
              <span
                className="remove-chat"
                onClick={() => handleDelete(chat.id)}
              >
                Remove Chat
              </span>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <div className="add-chat" onClick={handleOpen}>
        Add Chat
      </div>
      <Dialog open={visible} onClose={handleClose}>
        <DialogTitle>Please enter a name for new chat</DialogTitle>
        <TextField value={newChatName} onChange={handleChange} />
        <Button onClick={onAddChat} disabled={!newChatName}>
          Submit
        </Button>
      </Dialog>
    </div>
  );
};
