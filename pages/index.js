import axios from "axios";
import Head from "next/head";
import Image from "next/legacy/image";
import { useState } from "react";
import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";
import styles from "../styles/Home.module.css";
import Add from '../components/Add';

export default function Home({ pizzaList,IsLoggedIn, admin }) {
  const [close, setClose] = useState(true);
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant in Newyork</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
     
      <PizzaList pizzaList={pizzaList}  isLoggedIn={IsLoggedIn}/>
      {!close && <Add setClose={setClose} />}
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;
  let IsLoggedIn = false;

  if (myCookie.token === process.env.TOKEN) {
    admin = true;
    IsLoggedIn = true;
  }

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/products");
      return res.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    }
  };

  let pizzaList = await fetchData();

  // Retry mechanism
  if (pizzaList.length === 0) {
    console.log("Retrying to fetch products...");
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait for 1 second
    pizzaList = await fetchData();
  }

  return {
    props: {
      pizzaList,
      admin,
      IsLoggedIn,
    },
  };
};





