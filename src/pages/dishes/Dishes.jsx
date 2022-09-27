import { DishCard } from "./components/DishCard";
import styles from "./dishes.module.css";
const Dishes = () => {
  return (
    <div className={styles.DishesBox}>
      <div className={styles.nav}>
        <button>
          <i class="bx bx-left-arrow-alt"></i>Back
        </button>
        <button>Submit</button>
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
