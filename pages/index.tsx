import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Basics from "../components/Basics";

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Home | QazMine</title>
        <meta name="description" content="Roll the Periodic Table" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Basics />
    </Layout>
  );
};

export default Home;
