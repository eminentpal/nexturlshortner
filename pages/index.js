import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header/Header";
import Home from "../components/Home/Home";
import Footer from "../components/Footer/Footer";
export default function HomePage() {
 

  return (
    <div>
      <Head>
        <title>Shortly URL Shortener</title>
        <meta name="Shortly" content="Generate shortened links" />
        <link rel="icon" href="/favicon-32X32.png" />
      </Head>

      <Header />
      <Home />
    <Footer />
    </div>
  );
}
