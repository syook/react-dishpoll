import styles from "./home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className={styles.homeContainer}>
      <span>Start Voting Your Favuorite Dishes Now!</span>
      <div className={styles.button}>
        <Link to="/dishes" className={styles.btnLinks}>Start Voting</Link>
        <Link to="/results" className={styles.btnLinks}>Show Results</Link>
      </div>
    </section>
  );
};

export { Home };
