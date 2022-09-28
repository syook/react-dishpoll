import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./login.module.css";
import { toast } from "react-toastify";
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
      navigation("/home");
      toast.success("Successfully Logged In");
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
          placeholder="amar"
          onChange={changeHandler}
        />
        <input
          type="password"
          id="password"
          name="password"
          required
          placeholder="amar123"
          onChange={changeHandler}
        />
        <button>Login</button>
      </form>
    </section>
  );
};

export { Login };
