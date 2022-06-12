import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { FiSettings } from "react-icons/fi";
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
      <div className="relative flex dark:bg-main-dark-bg">
        <div className="fixed right-4 bottom-4" style={{ zIndex: 1000 }}>
          <TooltipComponent content="Settings" position="TopCenter">
            <button
              type="button"
              className="p-3 text-3xl text-white hover:drop-shadow-xl hover:bg-light-gray"
              style={{ background: "blue", borderRadius: "50%" }}
            >
              <FiSettings />
            </button>
          </TooltipComponent>
        </div>
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
