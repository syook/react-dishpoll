import styles from "./results.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Result = () => {
  const [resData, setResData] = useState(null);

  useEffect(() => {
    const array = JSON.parse(localStorage.getItem("dishList"));
    setResData(array);
  }, []);

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
            {resData?.map((element, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{element.dishName}</td>
                  <td>{!element.points ? 0 : element.points}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export { Result };
