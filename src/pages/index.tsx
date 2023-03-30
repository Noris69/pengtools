import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";


const Home: NextPage = (props) => {

  

  return (
    <div>
      <Head>
        <title>PengSol AI Tools</title>
        <meta
          name="description"
          content="PengSol AI Tools"
        />
        
      </Head>
      <HomeView />

    </div>
  );
};

export default Home;
