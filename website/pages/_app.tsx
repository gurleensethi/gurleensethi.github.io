import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="" lang="en">
      <Head>
        <title>Gurleen Sethi</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-[100vh]">
        <div className="bg-primaryLight fixed right-0 top-0 bottom-0 left-0 z-[-2]"></div>
        <div className="bg-secondaryLight fixed right-0 top-0 bottom-0 left-[20%] -rotate-45 -translate-y-[15%] origin-top-right z-[-1]"></div>

        <div className="max-w-screen-xl mx-auto min-h-[100vh]">
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  );
}

export default MyApp;
