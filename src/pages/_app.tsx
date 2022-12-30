import { CommandPalette } from "@components/CommandPalette";
import { NavBar } from "@components/NavBar";
import { type AppType } from "next/dist/shared/lib/utils";

import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <CommandPalette />
      <NavBar />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
