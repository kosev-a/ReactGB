import "./Home.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { login, signUp } from "../services/firebase";

export const Home = ({ isSignUp }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePass = (e) => {
    setPass(e.target.value);
  };

  const handleSignUp = async () => {
    try {
      await signUp(email, pass);
    } catch (e) {
      setError(e.message);
    }
  };

  const handleSignIn = async () => {
    try {
      await login(email, pass);
    } catch (e) {
      setError(e.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      handleSignUp();
    } else {
      handleSignIn();
    }

    setEmail("");
    setPass("");
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>Hi! To view the content of the site, you need to log in or register...</p>
      <Link to={`${isSignUp ? "/" : "/signup"}`}>
        {!isSignUp ? "SignUp" : "Already have an account? Login"}
      </Link>
      <h4>{isSignUp ? "SignUp" : "Login"}</h4>
      <form onSubmit={handleSubmit}>
        <input placeholder="e-mail" type="text" value={email} onChange={handleChangeEmail} />
        <input placeholder="password" type="password" value={pass} onChange={handleChangePass} />
        <button>LOGIN</button>
        {error && <span>{error}</span>}
      </form>
    </div>
  );
};
