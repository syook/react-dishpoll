import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./login.module.css";
const users = require("../../db/users.json");

const Login = () => {
  const [userCredential, setUserCredential] = useState({
    username: null,
    password: null,
  });
  const navigation = useNavigate();

  const changeHandler = (event) => {
    setUserCredential({
      ...userCredential,
      [event.target.name]: event.target.value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    let userExist = users.some((user) => {
      return (
        user.username == userCredential.username &&
        user.password == userCredential.password
      );
    });

    if (!userExist) {
      alert("User Not Found");
    } else {
      alert("LoggedIn Successfully");
      navigation("/home");
    }
  };
  return (
    <section className={styles.loginSection}>
      <span className={styles.loginHeading}>Login</span>
      <form className={styles.loginForm} onSubmit={submitHandler}>
        <input
          type="text"
          id="username"
          name="username"
          autoComplete="off"
          required
          placeholder="Username"
          onChange={changeHandler}
        />
        <input
          type="password"
          id="password"
          name="password"
          required
          placeholder="Password"
          onChange={changeHandler}
        />
        <button>Login</button>
      </form>
    </section>
  );
};

export { Login };
