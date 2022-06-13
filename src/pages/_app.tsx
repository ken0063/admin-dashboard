import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { Layout } from "../components";
import ContextProvider from "../hooks/useStateContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const [showing, setShowing] = useState(false);

  useEffect(() => {
    setShowing(true);
  }, []);

  if (!showing) {
    return null;
  }

  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <div className="h-full dark:bg-main-dark-bg">
        <ContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ContextProvider>
      </div>
    );
  }
}
export default MyApp;
