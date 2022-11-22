import './App.css';
import { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Link,
  Route,
  useParams,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { Home } from './pages/Home';
import { store } from './store';
import { Chats, initialChats } from './pages/Chats';
import { ChatList } from './pages/ChatList';
import { Profile } from './pages/Profile';
import { NoChat } from './pages/NoChat';
import { NoFound } from './pages/NoFound';

export const App = () => {
  const { chatId } = useParams();
  const [chats, setChats] = useState(initialChats);

  return (
    <>
      <Provider store={store}>
        <div className="wrapper">
          <BrowserRouter>
            <header>
              <ul>
                <li>
                  <Link to="/profile">profile</Link>
                </li>
                <li>
                  <Link to="/chats">chats</Link>
                </li>
                <li>
                  <Link to="/">Home</Link>
                </li>
              </ul>
            </header>
            <Routes>
              <Route path="/profile" element={<Profile />} />
              <Route path="/chats" element={<ChatList chats={chats} />} />
              <Route
                path={'chats/:chatId'}
                element={<Chats chats={chats} setChats={setChats} />}
              />
              <Route path="/nochat" element={<NoChat chats={chats} />} />
              <Route exact path="/" element={<Home />} />
              <Route path="*" element={<NoFound />} />
            </Routes>
          </BrowserRouter>
        </div>
      </Provider>
    </>
  );
};
