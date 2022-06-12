import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import type { AppProps } from "next/app";
import { FiSettings } from "react-icons/fi";
import { Layout } from "../components";
import ContextProvider from "../hooks/useStateContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <div className="flex relative dark:bg-main-dark-bg">
      <div className="fixed right-4 bottom-4" style={{ zIndex: 1000 }}>
        <TooltipComponent content="Settings" position="TopCenter">
          <button
            type="button"
            className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
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

export default MyApp;
