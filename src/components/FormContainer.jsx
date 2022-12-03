import "../App.css";
import { useState, useCallback } from "react";
import { Input } from "./Input";
import { Button } from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { MessageList } from "./MessageList";
import { addMessageWithThunk } from "../store/messages/actions";
import { Form } from "./Form";

export const FormContainer = () => {
  const params = useParams();
  const { chatId } = params;
  const [author, setAutor] = useState("");
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const onAddMessage = useCallback(
    (message) => {
      dispatch(addMessageWithThunk(chatId, message));
    },
    [chatId, dispatch]
  );

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
    <div>
      <MessageList />
      <Input
        changeMess={handleChangeMess}
        changeAut={handleChangeAut}
        value={value}
        author={author}
      />
      <Button click={handleClick} />
      <Form />
    </div>
  );
};
