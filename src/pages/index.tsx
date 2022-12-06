import { Hero } from "@components/Hero";
import { LandingSection } from "@components/LandingSection";
import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>AboveAverage</title>
      </Head>
      <Hero />
      <LandingSection />
    </>
  );
};

export default Home;
