import Head from 'next/head';
import styles from '../styles/About.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Us</title>
        <meta name="description" content="Learn more about our pizza restaurant" />
      </Head>
      <h1 className={styles.title}>About Us</h1>
      <p className={styles.description}>
        Welcome to our pizza restaurant! We are passionate about serving the best pizza in town.
        Our ingredients are fresh, and our recipes are crafted with love and care.
      </p>
      <p className={styles.description}>
        Our story began in 2020, and since then, we have been dedicated to providing our customers
        with delicious pizza and excellent service. Thank you for being a part of our journey!
      </p>
    </div>
  );
};

export default About;