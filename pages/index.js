import Head from 'next/head';
import Image from 'next/legacy/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Featured from '@/components/Featured';
import PizzaList from '@/components/PizzaList';





export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
       
        <title>Pizza Palace</title>
        <meta name="description" content="Best pizza in town" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="C:\Users\souma\Desktop\New folder\restaurant-app\public\favicon.ico"/>
      </Head>
     
<Featured/>
<PizzaList/>
 </div>
   
  );
}
