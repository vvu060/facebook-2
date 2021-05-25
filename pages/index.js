import Head from "next/head";
import { getSession } from "next-auth/client";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Login from "../components/Login";
import Feed from "../components/Feed";
import Widgets from "../components/Widgets";

export default function Home({ session }) {
  if (!session) return <Login />;
  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-512.png"
        />
        <title>Facebook Clone</title>
      </Head>

      <Header />

      <main className="flex">
        <Sidebar />
        <Feed />
        <Widgets />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  // Get the user
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
