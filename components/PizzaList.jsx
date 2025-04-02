import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";
import Image from "next/image";

const PizzaList = ({ pizzaList,IsLoggedIn }) => {
  
  return (
    <div className={styles.container}>
      <div className={styles.images}> 
       <Image  src="/img/shape_1.png" // Path to your image in the public folder
          alt="Shape 1"
          width={200} // Set the width of the image
          height={200} // Set the height of the image
          className={styles.imageRight} 
        />
        

       <Image  src="/img/shape_2.png" // Path to another image
          alt="Shape 2"
          width={200}
          height={200}
          className={styles.imageLeft} 
        />
      </div>
      <h1 className={styles.title}>Pizza Available</h1>
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