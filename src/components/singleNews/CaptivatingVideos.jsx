import React from "react";
import tw from "twin.macro";
import data from "./data.json";
import CaptivVideoItem from "./CaptivVideoItem";
const Container = tw.div`h-[700px] lg:mb-20 flex justify-between flex-wrap gap-[20px] lg:overflow-y-auto lg:pr-4`;
function CaptivatingVideos() {
  return (
    <Container>
      {data.map((elt, i) => (
        <CaptivVideoItem key={i} {...elt} />
      ))}
    </Container>
  );
}

export default CaptivatingVideos;
