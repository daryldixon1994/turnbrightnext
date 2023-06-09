import Image from "next/image";
import React from "react";
import tw from "twin.macro";
import Link from "next/link";
const Item = tw.div`border-r-4 border-r-slate-400 min-w-[400px] flex flex-col justify-between p-4`;
const H1 = tw.h1`font-poppins font-medium text-lg text-[#001436]`;
const H5 = tw.h5`font-poppins text-[#001436] text-sm`;
const NavLink = tw.a`hover:underline`
function NewsItem({ title, date, image, border, link }) {
  return (
    <NavLink href={`${link}`} target="_blank">
      <Item
        style={
          border
            ? { borderRight: "4px solid #94a3b8" }
            : { borderRight: "none" }
        }
      >
        {image && <Image src={image} alt="" />}
        <H1> {title} </H1>
        <H5> {date} </H5>
      </Item>
    </NavLink>
  );
}

export default NewsItem;
