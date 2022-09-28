import styles from "./dishcard.module.css";

const DishCard = ({ id, dishName, description, image }) => {
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
        <button>1</button>
        <button>2</button>
        <button>3</button>
      </div>
    </section>
  );
};

export { DishCard };
