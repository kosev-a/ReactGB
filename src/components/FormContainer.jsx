import "../App.css";
import { useState, useCallback, useEffect } from "react";
import { Input } from "./Input";
import { Button } from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMessageList } from "../store/messages/selectors";
import { messagesRef } from "../services/firebase";
import { push, onValue } from "firebase/database";
import {
  addMessageWithFirebase,
  addMessageWithThunk,
  initMessageTracking,
} from "../store/messages/actions";

export const FormContainer = () => {
  const params = useParams();
  const { chatId } = params;
  const messageList = useSelector(getMessageList);
  const messages = messageList[chatId];
  const [author, setAutor] = useState("");
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const onAddMessage = useCallback(
    (message, author) => {
      dispatch(addMessageWithFirebase(chatId, message, author));
    },
    [chatId]
  );

  useEffect(() => {
    dispatch(initMessageTracking());
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
