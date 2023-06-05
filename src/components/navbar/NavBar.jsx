import React, { useEffect, useState } from "react";
import tw from "twin.macro";
import UpNavbarSection from "./UpNavbarSection";
import DownNavBarSection from "./DownNavBarSection";
// import "./style.css"
const Container = tw.div`box-border`;
function NavBar({ offset }) {
  return (
    <Container id="navbar-container">
      <UpNavbarSection />
      <DownNavBarSection offset={offset} />
    </Container>
  );
}

export default NavBar;
