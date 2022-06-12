import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(n,i,v,r,s,c,x,z){x=window.AwsRumClient={q:[],n:n,i:i,v:v,r:r,c:c};window[n]=function(c,p){x.q.push({c:c,p:p});};z=document.createElement('script');z.async=true;z.src=s;document.head.insertBefore(z,document.head.getElementsByTagName('script')[0]);})('cwr','2f7e9ee1-28a0-4d92-bcd1-a0d3b912463e','1.0.0','eu-west-1','https://client.rum.us-east-1.amazonaws.com/1.0.5/cwr.js',{sessionSampleRate:1,endpoint:"https://dataplane.rum.eu-west-1.amazonaws.com",telemetries:["performance","errors","http"],allowCookies:true,enableXRay:false});`,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
