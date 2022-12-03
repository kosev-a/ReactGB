export const Button = (props) => {
  return (
    <div className="btn">
      <button onClick={props.click}>Отправить</button>
    </div>
  );
};
