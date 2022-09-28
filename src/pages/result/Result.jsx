import styles from "./results.module.css";
import { Link } from "react-router-dom";

const Result = () => {
  return (
    <section className={styles.ResultBox}>
      <div className={styles.nav}>
        <Link to="/dishes" className={styles.btnLinks}>
          <i class="bx bx-left-arrow-alt"></i>Back
        </Link>
        <Link to="/" className={styles.btnLinks}>
          Logout
        </Link>
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
