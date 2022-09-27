import styles from "./login.module.css"

const Login = () => {
  return (
    <section className={styles.loginSection}>
      <span className={styles.loginHeading}>Login</span>
      <form className={styles.loginForm}>
        <input type="text" id="username" autoComplete="off" required placeholder="Username" />
        <input type="password" id="password" required placeholder="Password"/>
        <button>Login</button>
      </form>
    </section>
  );
};

export { Login };
