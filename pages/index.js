import Feed from "@/components/Feed";
import Sidebar from "@/components/Sidebar";
import Widgets from "@/components/Widgets";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ newsResults }) {
  return (
    <>
      <Head>
        <title>Twitter Clone</title>
      </Head>
      <main className="flex min-h-screen mx-auto">
        {/* Sidebar */}
        <Sidebar />
        {/* Feed */}
        <Feed />
        {/* Widgets */}
        <Widgets newsResults={newsResults.articles} />
        {/* Modal */}
      </main>
    </>
  );
}

// https://saurav.tech/NewsAPI/top-headlines/category/business/us.json

export async function getServerSideProps() {
  const newsResults = await fetch(
    `https://saurav.tech/NewsAPI/top-headlines/category/business/us.json`
  ).then((res) => res.json());

  return {
    props: { newsResults },
  };
}
