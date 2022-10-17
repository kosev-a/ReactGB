import './App.css';
import { Message } from './components/Message';

export const App = () => {
  const myMess = 'Homework #1';
  const topPosition = '150px';
  return (
    <div className="App" style={{marginTop: topPosition}}>
      <Message  mess={myMess} />
    </div>
  );
}
