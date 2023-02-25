import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
      <Component className="box-border" {...pageProps} />
  );
}

export default MyApp;
