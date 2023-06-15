import React from "react";
import tw from "twin.macro";
const Item = tw.div`w-[48%] box-border bg-[#001436] p-2 text-white font-poppins rounded-lg`;
const H1 = tw.h1`font-bold uppercase text-[1.35rem]`;
const H4 = tw.h4``;
const Sqaure = tw.div`w-3 h-3 bg-[#FECB36]`;
const Intro = tw.div`flex items-center gap-2 lg:mt-4`;
function CaptivVideoItem({ title, subTitle, imgUrl }) {
  return (
    <Item>
      <img src={imgUrl} alt="" width="100%" height="200px" />
      <Intro>
        <Sqaure />
        <H4>{subTitle}</H4>
      </Intro>
      <H1>{title}</H1>
    </Item>
  );
}

export default CaptivVideoItem;
