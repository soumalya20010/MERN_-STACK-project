import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard"

const PizzaList = ({ pizzaList,IsLoggedIn }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Pizza Menu</h1>
      <p className={styles.desc}>
       
      </p>
      <div className={styles.wrapper}>
        {pizzaList.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} IsLoggedIn={IsLoggedIn} />
        ))}
      </div>
    </div>
  );
};

export default PizzaList;