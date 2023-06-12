import React from "react";
import tw from "twin.macro";
import AsideVideos from "./AsideVideos";
import Link from "next/link";
import { alcoveData } from "./articleAlcoveData";
import Image from "next/image";
const Container = tw.div`box-border mb-24 flex justify-between`;
const LeftContainer = tw.div`box-border w-[803px]`;
const Content = tw.div`box-border w-[100%] grid grid-cols-2 grid-rows-1 gap-6 lg:h-[635px]`;
const Item = tw.span`box-border flex flex-col justify-between cursor-pointer transition duration-700 ease-in-out hover:scale-95`;
const H1 = tw.span`text-[#001436] font-poppins text-[1.37rem] uppercase font-extrabold  lg:h-[120px] hover:underline`;
const H11 = tw.span`font-black uppercase text-xl text-left font-poppins text-[#323030] lg:mb-4`;
const P = tw.span`text-[#323030] uppercase font-poppins font-light lg:h-[160px]`;
const Date = tw.span`text-[#323030] uppercase font-poppins font-light`;
const Author = tw.span`font-poppins font-bold text-[#323030]`;
const Extra = tw.span`flex items-center justify-between`;
function Flashback() {
  return (
    <Container>
      <LeftContainer>
        <H11>Unmissable Article</H11>
        <Content>
          {alcoveData.map(
            (elt, i) =>
              i > 0 && (
                <Link key={i} href={`/article/article-alcove/${elt.id}`}>
                  <Item>
                    <img src={elt.pic} alt="" />
                    <H1 href={`${elt.link}`}>{elt.title}</H1>
                    <P>{elt.introDesc}</P>
                    <Extra>
                      <Date>{elt.date}</Date>
                      <Author>{elt.author}</Author>
                    </Extra>
                  </Item>
                </Link>
              )
          )}
        </Content>
      </LeftContainer>
      <AsideVideos />
    </Container>
  );
}

export default Flashback;
