import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Desi Mart - Shopping App</title>
      </Head>
      <Component {...pageProps} />;
    </>
  )
}
