import axios from "axios";
import Head from "next/head";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Results from "../components/Results";
import config, { base_url } from "../config";

export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>The Movie show</title>
      </Head>

      {/* Header */}

      <Header />

      {/* Navbar */}
      <Navbar />

      {/* results */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {results.map((item) => (
          <Results key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
export const getServerSideProps = async (ctx) => {
  const toFetch = ctx.query.genre;
  const {
    data: { results },
  } = await axios(
    `${base_url}${config[toFetch]?.url || config.fetchTrending.url}`
  );
  return {
    props: {
      results,
    },
  };
};
