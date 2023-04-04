import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <Navbar/>
        <title>Pizza Palace</title>
        <meta name="description" content="Best pizza in town" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="png" href="C:\Users\souma\Desktop\New folder\restaurant-app\public\pizza favi.png"/>
      </Head>
      <Footer />
 homepage 
 </div>
   
  );
}
