import Image from "next/image";
import styles from "../styles/Navbar.module.css";
const Navbar = () => {
    return(
        <div className={styles.container}>
            <div className={styles.item}>
            <div className={styles.callButton}>
            <Image src="/img/telephone.jpg" alt="" width="132" height="132"/>

                </div>
<div className={styles.texts}>
    <div className={styles.text}>ORDER NOW!</div>
    <div className={styles.text}>012 345 678</div>
</div>
</div>
                <div className={styles.item}></div>
                <div className={styles.item}></div>
                    </div>
          
    
    );
};
 
export default Navbar;