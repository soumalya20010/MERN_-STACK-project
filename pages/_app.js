import dynamic from "next/dynamic";
import { Provider } from "react-redux";
import store from "../redux/store";
import Layout from "@/components/Layout";
import "@/styles/globals.css";

const Auth0ProviderWithClient = dynamic(
  () => import("@auth0/auth0-react").then((module) => module.Auth0Provider),
  { ssr: false }
);

export default function restaurantapp({ Component, pageProps }) {
  return (
    <Auth0ProviderWithClient
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
      redirectUri={typeof window !== 'undefined' && window.location.origin}
    >
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </Auth0ProviderWithClient>
  );
}