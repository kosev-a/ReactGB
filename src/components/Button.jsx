export const Button = (props) => {
  return (
    <div className="Btn">
      <button onClick={props.click}>Отправить</button>
    </div>
  );
};
