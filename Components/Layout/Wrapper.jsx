import dynamic from "next/dynamic";
import { Suspense } from "react";

// DYNAMIC IMPORT
const Header = dynamic(() => import("./Header"), {
  suspense: true,
});
const Footer = dynamic(() => import("./Footer"), {
  suspense: true,
});

const Wrapper = ({ children }) => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
      </Suspense>
      {children}
      <Footer />
    </>
  );
};

export default Wrapper;
