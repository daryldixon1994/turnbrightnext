import Image from "next/image";
import React from "react";
import tw from "twin.macro";

const Item = tw.div`border-r-4 border-r-slate-400 min-w-[300px] flex flex-col justify-between p-4`;
const H1 = tw.h1`font-poppins font-medium text-xl text-[#001436]`;
const H5 = tw.h5`font-poppins text-[#001436] text-sm`;
function NewsItem({ title, date, image, border }) {
  return (
    <Item
      style={
        border ? { borderRight: "4px solid #94a3b8" } : { borderRight: "none" }
      }
    >
      {image && <Image src={image} alt="" />}
      <H1> {title} </H1>
      <H5> {date} </H5>
    </Item>
  );
}

export default NewsItem;
