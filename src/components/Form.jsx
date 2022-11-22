import '../App.css';
import { useState } from 'react';
import { Input } from './Input';
import { Button } from './Button';

export const Form = () => {
  const [author, setAutor] = useState('');
  const [value, setValue] = useState('');
  const [messageList, setMessageList] = useState([]);

  const handleClick = () => {
    setMessageList([...messageList, { author, value }]);
    setValue('');
    setAutor('');
  };

  const handleChangeMess = (ev) => {
    setValue(ev.target.value);
  };

  const handleChangeAut = (ev) => {
    setAutor(ev.target.value);
  };

  return (
    <>
      <div className="wrapper-column">
        <div className="message-header">
          <h3>Список сообщений</h3>
        </div>
        <div className="message-list">
          {messageList.map((message, idx) => (
            <div className="mess" key={idx}>
              <p>Автор: {message.author}</p>
              <p>Сообщение: {message.value}</p>
              <hr />
            </div>
          ))}
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
