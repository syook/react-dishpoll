import styles from "./home.module.css";
const Home = () => {
  return (
    <section className={styles.homeContainer}>
      <span>Start Voting Your Favuorite Dishes Now!</span>
      <div className={styles.button}>
        <button>Start Voting</button>
        <button>Show Results</button>
      </div>
      {/* <div className={styles.logoutButton}>
        <button className={styles.logout}>
          <i class="bx bx-log-out-circle"></i>
        </button>
      </div> */}
    </section>
  );
};

export { Home };
