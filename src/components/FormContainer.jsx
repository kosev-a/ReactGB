import "../App.css";
import { useState, useCallback, useEffect } from "react";
import { Input } from "./Input";
import { Button } from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMessageList } from "../store/messages/selectors";
import { messagesRef } from "../services/firebase";
import {
  push,
  onValue,
} from "firebase/database";
import { addMessageWithThunk } from "../store/messages/actions";

export const FormContainer = () => {
  const params = useParams();
  const { chatId } = params;
  const messageList = useSelector(getMessageList);
  const messages = messageList[chatId];
  const [author, setAutor] = useState("");
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const onAddMessage = (message, author) => {
    push(messagesRef, {
      chatId,
      message,
      author,
    });
  };

  useEffect(() => {
    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const newMsgs = Object.entries(data).map((item) => ({
          id: item[0],
          ...item[1]
        }));
        addMessageWithThunk(newMsgs.id, newMsgs.message)
      }
      
    })
  }, []);

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
      <Input
        changeMess={handleChangeMess}
        changeAut={handleChangeAut}
        value={value}
        author={author}
      />
      <Button click={handleClick} />
    </div>
  );
};
