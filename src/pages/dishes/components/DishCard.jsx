import styles from "./dishcard.module.css";

const DishCard = () => {
  return (
    <section className={styles.dishCard}>
      <div className={styles.dishCardImgBox}>
        <img
          src="https://images.unsplash.com/photo-1664261910581-ac3334994d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
          className={styles.dishCardImg}
        />
      </div>
      <div className={styles.dishCardDetails}>
        <h5 className={styles.dishCardtitle}>Title Tile</h5>
        <p className={styles.dishCardContent}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit enim
          optio minus quod quos aspernatur consectetur rerum voluptatibus saepe
          esse! Cum sequi porro maiores alias quidem voluptatum debitis corrupti
          eveniet.
        </p>
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
