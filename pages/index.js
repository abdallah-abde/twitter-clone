import Sidebar from "@/components/Sidebar";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Twitter Clone</title>
      </Head>
      <main className="flex min-h-screen max-w-7xl mx-auto">
        {/* Sidebar */}
        <Sidebar />
        {/* Feed */}
        {/* Widgets */}
        {/* Modal */}
      </main>
    </>
  );
}
