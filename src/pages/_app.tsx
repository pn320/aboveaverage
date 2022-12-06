import { CommandPalette } from "@components/CommandPalette";
import { HeroAnimation } from "@components/HeroAnimation";
import { type AppType } from "next/dist/shared/lib/utils";

import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <CommandPalette />
      <HeroAnimation />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
