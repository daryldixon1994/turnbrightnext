import React from "react";
import tw from "twin.macro";
import TitleWithBackground from "../common/TitleWithBackground";
import Weather from "./Weather";
import Currency from "./Currency";
import Languages from "./Languages";

const Container = tw.div`box-border lg:mb-28 flex justify-between`;
const Left = tw.div`box-border w-[50%]`;
const Right = tw.div`box-border  w-[47%]`;
const DataBox = tw.div`box-border flex gap-2 mt-8`;
function GlanceAbout() {
  return (
    <Container>
      <Left>
        <TitleWithBackground t1="At a glance about" t2="switzerland" w={350} />
        <DataBox>
          <Weather />
          <Currency />
          <Languages />
        </DataBox>
      </Left>
      <Right></Right>
    </Container>
  );
}

export default GlanceAbout;
