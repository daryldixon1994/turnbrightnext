import React from "react";
import tw from "twin.macro";

const Title = tw.div`box-border`;
const Rectangle = tw.div` h-10 bg-[#FECB36] mb-[-1.4rem]`;
const H2 = tw.h2`font-poppins font-normal text-[#001436] text-4xl uppercase`;
const Second = tw.span`font-extrabold inline font-poppins  text-[#001436] text-4xl uppercase`;
function TitleWithBackground({ t1, t2, w }) {
  return (
    <Title>
      <Rectangle style={{ width: `${w}px` }} />
      <H2>
        {t1} <Second> {t2}</Second>
      </H2>
    </Title>
  );
}

export default TitleWithBackground;
