import Image from 'next/image';
import { useEffect, useState } from "react";
import styles from "../styles/Navbar.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";
import { useAuth0 } from "@auth0/auth0-react";
import { useRouter } from "next/router";
const Navbar = () => {
    const quantity = useSelector((state) => state.cart.quantity);
    const { loginWithRedirect,isAuthenticated,logout } = useAuth0();
    const [showNavbar, setShowNavbar] = useState(true); // State to track navbar visibility
    const router = useRouter();
    let lastScrollY = 0; 

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > lastScrollY) {
          // Scrolling down
          setShowNavbar(false);
        } else {
          // Scrolling up
          setShowNavbar(true);
        }
        lastScrollY = window.scrollY;
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    const handleCartClick = (e) => {
        if (!isAuthenticated) {
          e.preventDefault();
          alert('Please log in first to view your cart.');
          loginWithRedirect();
        }
      };
    return(
      <div
      className={`${styles.container} ${
        showNavbar ? "" : styles.hidden
      } ${router.pathname === "/" ? styles.transparent : styles.solid}`}
    >
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
          <Link href="/about" passHref>
            <li className={styles.listItem}>About</li>
          </Link>
          <Link href="/Menu" passHref>
          <li className={styles.listItem}>Menu</li></Link>
                    
                    <Image src="/img/pizza_logo1.png" alt="" width="150" height="100" />
                   
                    <Link href="/admin" passHref>
            <li className={styles.listItem}>Admin</li>
          </Link>
                   
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