import { initializeApp } from 'firebase/app';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import { getDatabase, ref } from "firebase/database";

const firebaseConfig = {
    apiKey: 'AIzaSyDhUU2cq_r_7KGQALu1YVoQRKHxzdmII_A',
    authDomain: 'mychat-757f7.firebaseapp.com',
    databaseURL: 'https://mychat-757f7-default-rtdb.firebaseio.com',
    projectId: 'mychat-757f7',
    storageBucket: 'mychat-757f7.appspot.com',
    messagingSenderId: '683397827794',
    appId: '1:683397827794:web:e63df1c12addad4635710b',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const signUp = (email, pass) =>
    createUserWithEmailAndPassword(auth, email, pass);
export const login = (email, pass) =>
    signInWithEmailAndPassword(auth, email, pass);
export const logout = () => signOut(auth);

export const db = getDatabase(app);
export const messagesRef = ref(db, "messages");
export const getMessageByIdRef = (id) => ref(db, `messages/${id}`);