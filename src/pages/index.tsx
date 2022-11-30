import { CommandPalette } from "@components/CommandPalette";
import { Hero } from "@components/Hero";
import { HeroAnimation } from "@components/HeroAnimation";
import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>AboveAverage</title>
      </Head>
      <Hero />
      <HeroAnimation />
      <CommandPalette />
    </>
  );
};

export default Home;
