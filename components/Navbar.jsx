import Image from 'next/legacy/image';
import styles from "../styles/Navbar.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";
import { useAuth0 } from "@auth0/auth0-react";
const Navbar = () => {
    const quantity = useSelector((state) => state.cart.quantity);
    const { loginWithRedirect,isAuthenticated,logout } = useAuth0();
    const handleCartClick = (e) => {
        if (!isAuthenticated) {
          e.preventDefault();
          alert('Please log in first to view your cart.');
          loginWithRedirect();
        }
      };
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
                <Link href="/" passHref>
            <li className={styles.listItem}>Homepage</li>
          </Link>
                    <li className={styles.listItem}>Products</li>
                    <li className={styles.listItem}>Menu</li>
                    <Image src="/img/pizza_logo1.png" alt="" width="150" height="100" />
                    <li className={styles.listItem}>Events</li>
                    <li className={styles.listItem}>Blog</li>
                    <li className={styles.listItem}>Contact</li>
                    {isAuthenticated ? (
                        <li>
                         <button className={styles.button} onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                         Log Out
                                           </button>
                                       </li>
                    ) : (
                    <li className={styles.listItem}><button className={styles.button} onClick={() => loginWithRedirect()}>Log In</button></li>
                      )}
</ul>
</div>
<div className={styles.item}>
        <Link href="/cart" passHref>
          <div className={styles.cart} onClick={handleCartClick}>
            <Image src="/img/shopping_cart.png" alt="Cart" width="35" height="30" />
            <div className={styles.counter}>{quantity}</div>
          </div>
        </Link>
      </div>
    </div>
    );
};
 
export default Navbar;