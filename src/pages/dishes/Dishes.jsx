import { DishCard } from "./components/DishCard";
import { Link, useNavigate } from "react-router-dom";
import styles from "./dishes.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

const Dishes = () => {
  const [dishes, setDishes] = useState([]);
  const [rank1, setRank1] = useState(null);
  const [rank2, setRank2] = useState(null);
  const [rank3, setRank3] = useState(null);
  const navigation = useNavigate();
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

  const rankOne = (id) => {
    if (id !== rank2 && id !== rank3) {
      setRank1(id);
    }
    if (id === rank2) {
      setRank2(null);
      setRank1(id);
    }
    if (id === rank3) {
      setRank3(null);
      setRank1(id);
    }
  };

  const rankTwo = (id) => {
    if (id !== rank1 && id !== rank3) {
      setRank2(id);
    }
    if (id === rank1) {
      setRank1(null);
      setRank2(id);
    }
    if (id === rank3) {
      setRank3(null);
      setRank2(id);
    }
  };

  const rankThree = (id) => {
    if (id !== rank1 && id !== rank2) {
      setRank3(id);
    }
    if (id === rank1) {
      setRank1(null);
      setRank3(id);
    }
    if (id === rank3) {
      setRank2(null);
      setRank3(id);
    }
  };

  const updateRanks = (id, value) => {
    let arr = JSON.parse(localStorage.getItem("dishList"));
    let newArr = arr.map((item) => {
      if (item.id === id) {
        if (item?.points) {
          item.points += value;
        } else item.points = value;
      } else {
        if (!item?.points) item.points = 0;
      }
      return item;
    });
    newArr.sort((a, b) => {
      return parseFloat(b.points) - parseFloat(a.points);
    });
    localStorage.setItem("dishList", JSON.stringify(newArr));
  };

  const voteSubmitHandler = () => {
    updateRanks(rank1, 30);
    updateRanks(rank2, 20);
    updateRanks(rank3, 10);
    navigation("/results");
  };

  return (
    <div className={styles.DishesBox}>
      <div className={styles.nav}>
        <Link to="/home" className={styles.btnLinks}>
          <i className="bx bx-left-arrow-alt"></i>Back
        </Link>
        <button
          onClick={() => voteSubmitHandler()}
          disabled={
            rank1 !== null && rank2 !== null && rank3 !== null ? false : true
          }
        >
          Submit Vote
        </button>
      </div>
      <div className={styles.flexCard}>
        {dishes.map((dish) => (
          <DishCard
            key={dish.id}
            {...dish}
            rankOne={rankOne}
            rankTwo={rankTwo}
            rankThree={rankThree}
            rank1={rank1}
            rank2={rank2}
            rank3={rank3}
          />
        ))}
      </div>
    </div>
  );
};

export { Dishes };
