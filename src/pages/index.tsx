import { Hero } from "@components/Hero";
import { HeroAnimation } from "@components/HeroAnimation";
import { LandingSection } from "@components/LandingSection";
import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>AboveAverage</title>
      </Head>
      <main className="overflow-hidden">
        <Hero />
        <HeroAnimation />
        <LandingSection />
      </main>
    </>
  );
};

export default Home;
