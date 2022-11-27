import { CommandPalette } from "@components/CommandPalette";
import { Hero } from "@components/Hero";
import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>AboveAverage</title>
      </Head>
      <Hero />
      <CommandPalette />
    </>
  );
};

export default Home;
