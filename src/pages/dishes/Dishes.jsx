import { DishCard } from "./components/DishCard";
import styles from "./dishes.module.css";
const Dishes = () => {
  return (
    <div className={styles.DishesBox}>
      <div className={styles.nav}>
      <button>Submit Vote</button>
        <button>
          <i class="bx bx-right-arrow-alt"></i>Result
        </button>
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
