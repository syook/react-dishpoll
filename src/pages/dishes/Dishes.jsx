import { DishCard } from "./components/DishCard";
import { Link } from "react-router-dom";
import styles from "./dishes.module.css";
const Dishes = () => {
  return (
    <div className={styles.DishesBox}>
      <div className={styles.nav}>
        <Link to="/home" className={styles.btnLinks}>
          <i class="bx bx-left-arrow-alt"></i>Back
        </Link>
        <button>Submit Vote</button>
      </div>
      <div className={styles.flexCard}>
        <DishCard />
        <DishCard />
        <DishCard />
        <DishCard />
        <DishCard />
        <DishCard />

        <DishCard />
        <DishCard />
        <DishCard />
        <DishCard />
        <DishCard />
      </div>
    </div>
  );
};

export { Dishes };
