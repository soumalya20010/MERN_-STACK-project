import Image from 'next/legacy/image';
import styles from "../styles/Navbar.module.css";
const Navbar = () => {
    return(
        <div className={styles.container}>
            <div className={styles.item}>
            <div className={styles.callButton}>
            <Image src="/img/telephone.png" alt="" width="30" height="30" />

                </div>
<div className={styles.texts}>
    <div className={styles.text}>ORDER NOW!</div>
    <div className={styles.text}>012 345 678</div>
</div>
</div>

                <div className={styles.item}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>Homepage</li>
                    <li className={styles.listItem}>Products</li>
                    <li className={styles.listItem}>Menu</li>
                    <Image src="/img/pizza_logo1.png" alt="" width="150" height="100" />
                    <li className={styles.listItem}>Events</li>
                    <li className={styles.listItem}>Blog</li>
                    <li className={styles.listItem}>Contact</li>
</ul>
</div>
                <div className={styles.item}>
                <div className={styles.cart}>
                    <Image src="/img/shopping_cart.png" alt="" width="35" height="30"/>
                   <div>
<div className={styles.counter}>2</div>
                    </div>
          </div>
          </div>
    </div>
    );
};
 
export default Navbar;