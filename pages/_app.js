import Layout from '@/components/Layout';
import '@/styles/globals.css'

export default function restaurantapp({ Component, pageProps }) {
  return (
    <Layout>
  <Component {...pageProps} />
  </Layout>
  );
}
