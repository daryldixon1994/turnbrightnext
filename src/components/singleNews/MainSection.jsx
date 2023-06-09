import React from "react";
import tw from "twin.macro";
import RightSection from "./RightSection";
import LeftSection from "./LeftSection";
import LocalFooter from "./LocalFooter";

const Container = tw.div`box-border flex justify-between lg:mb-24`;
function MainSection({ singleArticle }) {
  return (
    <Container>
      <LeftSection {...singleArticle} />
      <RightSection />
    </Container>
  );
}

export default MainSection;
