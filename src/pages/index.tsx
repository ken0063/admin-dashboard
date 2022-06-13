import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Home: NextPage = (): JSX.Element => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/ecommerce");
  }, [router]);

  return <div className="">Hello World</div>;
};

export default Home;
