import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Layout } from "../components";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <div className="flex relative dark:bg-main-dark-bg">
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="msapplication-TileImage" content="/logo192.png" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="description" content="An Admin Dashboard App" />
        <title>Admin Dashboard </title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(n,i,v,r,s,c,x,z){x=window.AwsRumClient={q:[],n:n,i:i,v:v,r:r,c:c};window[n]=function(c,p){x.q.push({c:c,p:p});};z=document.createElement('script');z.async=true;z.src=s;document.head.insertBefore(z,document.getElementsByTagName('script')[0]);})('cwr','2f7e9ee1-28a0-4d92-bcd1-a0d3b912463e','1.0.0','eu-west-1','https://client.rum.us-east-1.amazonaws.com/1.0.2/cwr.js',{sessionSampleRate:1,endpoint:"https://dataplane.rum.eu-west-1.amazonaws.com",telemetries:["performance","errors","http"],allowCookies:true,enableXRay:false});`,
          }}
        />
      </Head>
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
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
