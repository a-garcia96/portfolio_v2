import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Component className={`box-border`} {...pageProps} />;
    </ThemeProvider>
  );
}

export default MyApp;
