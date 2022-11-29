import "../App.css";
import { useState } from "react";
import { Input } from "./Input";
import { Button } from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../store/messages/actions";
import { useParams } from "react-router-dom";
import { MessageList } from "./MessageList";

export const Form = () => {
  const params = useParams();
  const { chatId } = params;
  const [author, setAutor] = useState("");
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const onAddMessage = (message, author) => {
    dispatch(addMessage(chatId, message, author));
  };

  const handleClick = () => {
    onAddMessage(value, author);
    setValue("");
    setAutor("");
  };

  const handleChangeMess = (e) => {
    setValue(e.target.value);
  };

  const handleChangeAut = (e) => {
    setAutor(e.target.value);
  };

  return (
    <>
      <MessageList />
      <div className="wrapper-column">
        <div className="message-header">
          <h3>Список сообщений</h3>
        </div>

        <Input
          changeMess={handleChangeMess}
          changeAut={handleChangeAut}
          value={value}
          author={author}
        />
        <Button click={handleClick} />
      </div>
    </>
  );
};
