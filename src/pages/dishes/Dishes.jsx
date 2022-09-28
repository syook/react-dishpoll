import { DishCard } from "./components/DishCard";
import { Link } from "react-router-dom";
import styles from "./dishes.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

const Dishes = () => {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    const dishesData = async () => {
      const response = await axios.get(
        "https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json"
      );
      setDishes(response.data);
      localStorage.setItem("dishList", JSON.stringify(response.data));
    };
    dishesData();
  }, []);

  return (
    <div className={styles.DishesBox}>
      <div className={styles.nav}>
        <Link to="/home" className={styles.btnLinks}>
          <i className="bx bx-left-arrow-alt"></i>Back
        </Link>
        <button>Submit Vote</button>
      </div>
      <div className={styles.flexCard}>
        {dishes.map((dish) => (
          <DishCard key={dish.id} {...dish} />
        ))}
      </div>
    </div>
  );
};

export { Dishes };
