import { AppProps } from "next/dist/next-server/lib/router/router";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
