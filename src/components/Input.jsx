import { useEffect, useRef } from 'react';
import '../App.css';

export const Input = (props) => {
  const ref = useRef(null);

  useEffect(() => {
    ref.current?.focus();
  });

  return (
    <div className="input-form">
      <input
        type="text"
        ref={ref}
        name="author"
        value={props.author}
        onChange={props.changeAut}
        placeholder="Автор"
      />
      <input
        type="text"
        name="mess"
        value={props.value}
        onChange={props.changeMess}
        placeholder="Сообщение"
      />
    </div>
  );
};
