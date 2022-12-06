import { CommandPalette } from "@components/CommandPalette";
import { type AppType } from "next/dist/shared/lib/utils";

import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <CommandPalette />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
