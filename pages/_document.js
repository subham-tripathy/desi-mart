import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head/>
      <body className='pt-28 min-h-screen'>
        <nav className='fixed z-10 left-0 right-0 top-0'><NavBar /></nav>
        <Main />
        <NextScript />
        <footer><Footer /></footer>
      </body>
    </Html>
  );
}
