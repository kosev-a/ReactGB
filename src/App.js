import './App.css';
import {
  BrowserRouter,
  Routes,
  Link,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { Home } from './pages/Home';
import { store } from './store';
import { Chats } from './pages/Chats';
import { ChatList } from './pages/ChatList';
import { Profile } from './pages/Profile';
import { NoChat } from './pages/NoChat';
import { NoFound } from './pages/NoFound';


export const App = () => {

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <div className="wrapper">
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
            <Route path="/chats" element={<ChatList />} />
            <Route
              path={'chats/:chatId'}
              element={<Chats />}
            />
            <Route path="/nochat" element={<NoChat />} />
            <Route exact path="/" element={<Home />} />
            <Route path="*" element={<NoFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
    </>
  );
};
