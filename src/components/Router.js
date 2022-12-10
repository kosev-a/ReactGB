import { Provider } from "react-redux";
import { BrowserRouter, Routes, Link, Route } from 'react-router-dom';
import { store, persistor } from '../store';
import { PersistGate } from "redux-persist/lib/integration/react";
import { Profile } from "../pages/Profile";
import { News } from "../pages/News";
import { ChatList } from "../pages/ChatList";
import { Chats } from "../pages/Chats";
import { NoChat } from "../pages/NoChat";
import { Home } from "../pages/Home";
import { NoFound } from "../pages/NoFound";
import { PublicRoute } from "./PublicRoute";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/firebase";
import { PrivateRoute } from "./PrivateRoute";

export const Router = () => {
    const [authed, setAuthed] = useState(false);

    const unauthorize = () => {
        setAuthed(false);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthed(true);
            } else {
                setAuthed(false);
            }
        });
        return unsubscribe;
    }, []);

    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <BrowserRouter>
                    <div className="wrapper">
                        <header>
                            <ul>
                                <li>
                                    <Link to="/">home</Link>
                                </li>
                                <li>
                                    <Link to="/profile">profile</Link>
                                </li>
                                <li>
                                    <Link to="/chats">chats</Link>
                                </li>
                                <li>
                                    <Link to="/news">news</Link>
                                </li>
                            </ul>
                        </header>
                        <Routes>
                            <Route path="/profile" element={<PrivateRoute authed={authed} />}>
                                <Route
                                    path=""
                                    element={<Profile onLogout={unauthorize} />}
                                />
                            </Route>
                            <Route path="/news" element={<News />} />
                            <Route path="/chats" element={<ChatList />} />
                            <Route path={'chats/:chatId'} element={<PrivateRoute authed={authed} />}>
                                <Route
                                    path=""
                                    element={<Chats />}
                                />
                            </Route>
                            <Route path="/nochat" element={<NoChat />} />
                            <Route path="/" element={<PublicRoute authed={authed} />}>
                                <Route path="" element={<Home />} />
                                <Route path="/signup" element={<Home isSignUp />} />
                            </Route>
                            <Route path="*" element={<NoFound />} />
                        </Routes>
                    </div>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    );
};