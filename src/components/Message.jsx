import React from 'react';
import '../App.css';

export const Message = ({ text, author }) => {
  return (
    <div className="mess">
      <div>
        <p>
          Автор: <span>{author}</span>
        </p>
        <p>
          Сообщение: <span>{text}</span>
        </p>
      </div>
    </div>
  );
};
