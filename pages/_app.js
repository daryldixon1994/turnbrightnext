import { useState, useEffect } from "react";
import { GlobalStyles } from "twin.macro";
import "semantic-ui-css/semantic.min.css";
import "../styles/style.css";
import ContactUs from "@/components/contactUs/ContactUs";
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
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <>
      <GlobalStyles />
      {/* <ContactUs /> */}
      {/* <NavBar offset={offset} /> */}
      <Component {...pageProps} />
      {/* <Footer /> */}
    </>
  );
}
