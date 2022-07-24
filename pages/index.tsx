import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import BasicsOne from "../components/Basics/BasicsOne";
import BasicsTwo from "../components/Basics/BasicsTwo";
import BasicsThree from "../components/Basics/BasicsThree";
import ReadyToStart from "../components/ReadyToStart";

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Home | QazMine</title>
        <meta name="description" content="Roll the Periodic Table" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <BasicsOne />
      <BasicsTwo />
      <BasicsThree />
      <ReadyToStart />
    </Layout>
  );
};

export default Home;
