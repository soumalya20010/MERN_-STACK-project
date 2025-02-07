import Image from "next/legacy/image";
import styles from "../styles/PizzaCard.module.css";
import { useRouter } from "next/router";
import { useAuth0 } from "@auth0/auth0-react";

const PizzaCard = ({ pizza }) => {
  const router = useRouter();
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const handleOrderClick = async (e) => {
    e.preventDefault(); // Prevent the default link behavior
    if (!isAuthenticated) {
      alert("Please log in before ordering.");
      await loginWithRedirect(); // Log in the user using Auth0
    } else {
      // Proceed with the order process
      router.push(`/products/${pizza._id}`);
    }
  };
 
  const imagePath = `${pizza.img}`;
  console.log(`Image path: ${pizza.img}`);
  return (
    <div className={styles.container}>
      <a href={`/products/${pizza._id}`} onClick={handleOrderClick}>
        <Image src={imagePath} alt={pizza.title} width="500" height="500" />
      </a>
      <h1 className={styles.title}>{pizza.title}</h1>
      <span className={styles.price}>${pizza.prices[0]}</span>
      <p className={styles.desc}>{pizza.desc}</p>
    </div>
  );
};

export default PizzaCard;