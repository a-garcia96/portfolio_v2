import "../styles/globals.css";
import { useAtom } from "jotai";
import { themeAtom } from "../atoms";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useAtom(themeAtom);

  return (
    <Component className={`box-border bg-blue-500 ${theme}`} {...pageProps} />
  );
}

export default MyApp;
