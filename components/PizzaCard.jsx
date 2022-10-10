import Image from "next/image";
import styles from "../styles/PizzaCard.module.css";

const PizzaCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/pizza.jpg" alt="" width="500" height="500" />
      <h1 className={styles.title}>Caffe Americano</h1>
      <span className={styles.price}>$3.90</span>
      <p className={styles.desc}>
        combines freshly pulled shots of espresso with hot water to achieve the size of a standard cup of brewed coffee.
      </p>
    </div>
  );
};

export default PizzaCard;
