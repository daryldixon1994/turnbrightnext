import React from "react";
import tw from "twin.macro";
import Flag from "react-world-flags";

const Container = tw.div`box-border grow border-l-2 border-l-[rgb(3, 20, 0,0.7)] px-2`;
const H1 = tw.h1`font-poppins text-[#001436] text-xl font-bold`;
const P = tw.span`font-poppins font-normal text-lg text-[#001436] flex gap-2`;

function Languages() {
  return (
    <Container>
      <H1>Languages</H1>
      <P>
        <Flag code="ch" width={20} /> German (Swiss German)
      </P>
    </Container>
  );
}

export default Languages;
