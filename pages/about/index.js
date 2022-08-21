import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/home.module.scss";


export async function getServerSideProps({ req, res }) {

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  let data = {
    title: "Next.js with PWA about us",
    description:
      "Next.js with PWA is a boilerplate for creating a PWA with Next.js",
    image: "https://nextjs.org/static/images/next-logo.svg",
    url: "https://nextjs.org/learn/basics/first-app",
  };



  // Pass data to the page via props
  return { props: { data } };
}

export default function About({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{data?.title}</title>
        <meta name="description" content={data.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>About us page</h1>
      </main>
    </div>
  );
}
