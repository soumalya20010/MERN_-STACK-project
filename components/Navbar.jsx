import Image from 'next/image';
import { useEffect, useState } from "react";
import styles from "../styles/Navbar.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";
import { useAuth0 } from "@auth0/auth0-react";
import { useRouter } from "next/router";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
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
      alert("Please log in first to view your cart.");
      loginWithRedirect();
    }
  };

  return (
    <>
      {/* Second Navbar (Empty Items) */}
      <div
  className={`${styles.container} ${styles.upperNavbar} ${
    showNavbar ? "" : styles.hidden
  } ${router.pathname === "/" ? styles.transparent : styles.solid}`}
  style={{ top: "0px" }} // Position the second navbar at the top
>
      <div className={styles.item}>
          <div className={styles.callButton}>
            <Image src="/img/badge_2.png" alt="" width="55" height="55" />
          </div>
          <div className={styles.texts}>
            <div className={styles.text}>ORDER NOW!</div>
            <div className={styles.text}>012 345 678</div>
          </div>
          
        </div>
        <div className={styles.location}>
  <img
    src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
    alt="Location Icon"
    className={styles.icon}
  />
  <span>Restaurant St delicious city</span>
</div>
<div className={styles.schedule}>
  <img
    src="/img/clock.png"
    alt="Clock Icon"
    className={styles.icon}
  />
  <span>Daily 8am to 9pm</span>
</div>
        <div className={styles.Email}><img
    src="/img/comment.png"
    alt="email"
    className={styles.icon}
  />
  <span>Booking@restaurant</span></div>
        {/* <div className={styles.text}></div> */}
        <Link href="/cart" passHref>
            <div className={styles.cart} onClick={handleCartClick}>
              {isAuthenticated ? (
                <>
                  <Image
                    src="/img/features_icon_3.png"
                    alt="Cart"
                    width="45"
                    height="40"
                  />
                  <div className={styles.counter}>{quantity}</div>
                </>
              ) : (
                <Image
                  src="/img/features_icon_3.png"
                  alt="Guest Cart"
                  width="45"
                  height="40"
                />
              )}
            </div>
          </Link>
      
      </div>
          
      
      {/* Original Navbar */}
      <div
  className={`${styles.container} ${styles.lowerNavbar} ${
    showNavbar ? "" : styles.hidden
  } ${router.pathname === "/" ? styles.transparent : styles.solid}`}
  style={{ top: "42px" }} // Position the lower navbar below the upper navbar
>
      


        <div className={styles.item}>
          <ul className={styles.list}>
            <Link href="/" passHref>
              <li className={styles.listItem}>HOMEPAGE</li>
            </Link>
            <Link href="/about" passHref>
              <li className={styles.listItem}>ABOUT</li>
            </Link>
            <Link href="/Menu" passHref>
              <li className={styles.listItem}>MENU</li>
            </Link>
            <h1 className={styles.logo}>PIZZA ZONE</h1>
            <Link href="/admin" passHref>
              <li className={styles.listItem}>ADMIN</li>
            </Link>
         
            <li className={styles.listItem}>CONTACT</li>
            {isAuthenticated ? (
              <li>
                <button
                  className={styles.button}
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  LOGOUT
                </button>
              </li>
            ) : (
              <li className={styles.listItem}>
                <button
                  className={styles.button}
                  onClick={() => loginWithRedirect()}
                >
                  LOGIN
                </button>
              </li>
            )}
          </ul>
        </div>
      
      </div>
    </>
  );
};

export default Navbar;