import styles from "./results.module.css";

const Result = () => {
  return (
    <section className={styles.ResultBox}>
      <div className={styles.nav}>
        <button>
          <i class="bx bx-left-arrow-alt"></i>Back
        </button>
        <button>Logout</button>
      </div>
      <div>
        <h1>Ranks of Dishes</h1>
      </div>
      <div className={styles.tableDiv}>
        <table>
          <thead>
            <tr className={styles.colum}>
              <th scope="col">Rank</th>
              <th scope="col">Dish</th>
              <th scope="col">Points</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Palak</td>
              <td>10</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Palak</td>
              <td>10</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Palak</td>
              <td>10</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export { Result };
