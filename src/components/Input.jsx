import '../App.css';

export const Input = (props) => {
  return (
    <div className='InputForm'>
      <input type="text" name="author" value={props.author} onChange={props.changeAut} placeholder="Автор" />
      <input type="text" name="mess" value={props.value} onChange={props.changeMess} placeholder="Сообщение" />
    </div>
  );
};
