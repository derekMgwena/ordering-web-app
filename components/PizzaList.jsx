import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard"

const PizzaList = ({ pizzaList } ) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}> COFFEASIDAR THE BEST COFFEE IN TOWN</h1>
      <h2 className={styles.title}> Relax. Refresh. Reconnect</h2>

      <p className={styles.desc}>
        We're creating something new and fresh for the African market. Our brand provides a relaxed, serene ambience experience with an African culture feel.
      </p>
      <div className={styles.wrapper}>
      {pizzaList.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
          <PizzaCard/>
          <PizzaCard/>
          <PizzaCard/>
          <PizzaCard/>
          <PizzaCard/>
          <PizzaCard/>
          <PizzaCard/>
          <PizzaCard/>
      </div>
    </div>
  );
};

export default PizzaList;
