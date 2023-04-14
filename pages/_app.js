import dynamic from "next/dynamic";
import { Auth0Provider } from "@auth0/auth0-react";
import store from "../redux/store";
import { Provider } from "react-redux";
import Layout from "@/components/Layout";
import "@/styles/globals.css";

export default function restaurantapp({ Component, pageProps }) {
  const Auth0ProviderWithClient = dynamic(
    () => import("@auth0/auth0-react").then((module) => module.Auth0Provider),
    { ssr: false }
  );

  return (
    <Auth0ProviderWithClient
      domain="dev-13xilwp4tto27exd.us.auth0.com"
      clientId="CjeRiZhlCu491jjHIpW8c2Au9sUMQWM9"
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
