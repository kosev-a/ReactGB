import "../App.css";
import { useState } from "react";
import { Input } from "./Input";
import { Button } from "./Button";
import { ChatList } from "./Chats";

export const Form = () => {
  const [author, setAutor] = useState("");
  const [value, setValue] = useState("");
  const [messageList, setMessageList] = useState([]);

  const handleClick = () => {
    setMessageList([...messageList, { author, value }]);
    setValue("");
    setAutor("");
  };

  const handleChangeMess = (ev) => {
    setValue(ev.target.value);
  };

  const handleChangeAut = (ev) => {
    setAutor(ev.target.value);
  };

  return (
    <>
      <div className="wrapper">
        <ChatList />
        <div className="messageList">
          {messageList.map((message, idx) => (
            <div className="Mess" key={idx}>
              <p>Автор: {message.author}</p>
              <p>Сообщение: {message.value}</p>
              <hr />
            </div>
          ))}
        </div>
      </div>

      <Input
        changeMess={handleChangeMess}
        changeAut={handleChangeAut}
        value={value}
        author={author}
      />
      <Button click={handleClick} />
    </>
  );
};
