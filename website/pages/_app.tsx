import "../styles/globals.css";
import Head from "next/head";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-black text-white" lang="en">
      <Head>
        <title>Gurleen Sethi</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="max-w-screen-lg m-auto pb-8">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
