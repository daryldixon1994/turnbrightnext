import { useState, useEffect } from "react";
import { GlobalStyles } from "twin.macro";
import NavBar from "@/components/navbar/NavBar";
import Footer from "@/components/footer/Footer";
import "../styles/style.css";
export default function App({ Component, pageProps }) {
  const [offset, setOffset] = useState(0);
 
  useEffect(() => {
    const onScroll = () => {
      setOffset(window.pageYOffset);
    };
    // clean up code
    window.addEventListener("scroll", onScroll, { passive: true });
    // window.removeEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [offset]);
  return (
    <>
      <GlobalStyles />
      <NavBar offset={offset} />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
