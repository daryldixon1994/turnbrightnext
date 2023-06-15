import React from "react";
import { BsArrowDown } from "react-icons/bs";
import tw from "twin.macro";

const Container = tw.div`flex justify-end pr-[5rem]`;
function Arrow() {
  return (
    <Container>
      <BsArrowDown size={100} />
    </Container>
  );
}

export default Arrow;
