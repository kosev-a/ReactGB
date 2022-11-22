import { Link } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export const ChatList = ({ chats }) => {
  return (
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
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};
