import styles from "./dishcard.module.css";

const DishCard = ({ id, dishName, description, image,rankOne, rankTwo, rankThree, rank1, rank2, rank3 }) => {
 
  return (
    <section className={styles.dishCard} key={id}>
      <div className={styles.dishCardImgBox}>
        <img src={image} alt={dishName} className={styles.dishCardImg} />
      </div>
      <div className={styles.dishCardDetails}>
        <h5 className={styles.dishCardtitle}>{dishName}</h5>
        <p className={styles.dishCardContent}>{description}</p>
      </div>
      <div className={styles.voteBtn}>
        <button
          className={rank1 === id ? styles.activeBtn : styles.notActiveBtn}
          onClick={() => rankOne(id)}
        >
          1
        </button>
        <button
          className={rank2 === id ? styles.activeBtn : styles.notActiveBtn}
          onClick={() => rankTwo(id)}
        >
          2
        </button>
        <button
          className={rank3 === id ? styles.activeBtn : styles.notActiveBtn}
          onClick={() => rankThree(id)}
        >
          3
        </button>
      </div>
    </section>
  );
};

export { DishCard };
