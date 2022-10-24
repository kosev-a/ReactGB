import { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";

export const ChatList = () => {
  const [chatList, setChatList] = useState([
    { id: 1, name: "chat1" },
    { id: 2, name: "chat2" },
    { id: 3, name: "chat3" },
  ]);

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Список чатов
        </ListSubheader>
      }
    >
      {chatList.map((chat, idx) => (
        <ListItem
          key={idx}
          sx={{
            width: "100%",
            bgcolor: "green",
            padding: "0px",
            margin: "10px",
          }}
        >
          <ListItemButton>
            <ListItemText
              primary={chat.name}
              sx={{
                textAlign: "center",
              }}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};
