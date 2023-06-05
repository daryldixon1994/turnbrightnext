import React from "react";
import tw from "twin.macro";

import Slogant from "./Slogant";
const Container = tw.div`box-border h-[600px] w-[100%] relative lg:mb-[12rem]`;
const VideoSection = tw.video`box-border lg:h-[600px] w-[100%]`;
function IntroSection() {
  return (
    <Container className="intro-container">
      <VideoSection autoPlay muted loop>
        <source src="./shortVideo.mp4" type="video/mp4" />
      </VideoSection>
      <Slogant />
    </Container>
  );
}

export default IntroSection;
