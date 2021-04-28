import { AppProps } from "next/dist/next-server/lib/router/router";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-black text-white">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="max-w-screen-lg m-auto pb-8">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;