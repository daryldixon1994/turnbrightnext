import React, { useEffect, useState } from "react";
import NavBar from "./navbar/NavBar";
import Footer from "./footer/Footer";
function PublicLayout({ children }) {
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
    <div>
      <NavBar offset={offset} />
      <main> {children} </main>
      <Footer />
    </div>
  );
}

export default PublicLayout;
