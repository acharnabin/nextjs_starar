import React from "react";
import CheckAuthentication from "../../Services/AuthService";

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

  let has_token = CheckAuthentication(req, res);

  if (!has_token) {
    res.setHeader("Location", "/");
    res.statusCode = 302;
    res.end();
  }

  // Pass data to the page via props
  return { props: { data } };
}

const PrivatePage = () => {
  return <div>PrivatePage</div>;
};

export default PrivatePage;
