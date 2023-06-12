import React from "react";
import tw from "twin.macro";
import { HiShare } from "react-icons/hi";
import NewsList from "../featuredNews/NewsList";
import LocalFooter from "./LocalFooter";
import LeaveComment from "../common/LeaveComment";
const Main = tw.div`box-border w-[75%] min-h-[1200px] flex flex-col justify-between`;
const Pic = tw.div`box-border w-[100%] h-[550px]`;
const IntroDescBox = tw.div`flex items-center gap-2 lg:mt-5`;
const IntroDesc = tw.p`font-poppins text-base font-bold text-[#323030] uppercase`;
const Square = tw.div`w-2.5 h-10 bg-[#FECB36]`;
const P = tw.p`font-poppins text-base text-[#323030] uppercase lg:mt-8 leading-relaxed`;
const ShareBox = tw.div`border-y-2 border-[#011E77] flex gap-2 lg:mt-8 lg:mb-20 lg:p-2`;
const Share = tw.p`text-[#011E77] uppercase `;
function LeftSection({ pic, introDesc, desc }) {
  const data = [
    {
      title: "Generation Z überholt Babyboomer: So punkten Schweizer Firmen ",
      date: "25. Apr. 2023",
    },
    {
      title:
        "ICT-2030: Der Umbruch hat begonnen, neue Entwickler erobern den Markt ",
      date: "29. mar. 2023",
    },
    {
      title:
        "«Die Geschlechterungleichheit am Arbeitsmarkt wird 2030 gegessen sein» ",
      date: "17 FEB 2023",
    },
    {
      title: "Schweiz: Immer mehr Ukraine-Flüchtlinge suchen einen Job",
      date: "10. MAI. 2022",
    },
    {
      title: "Schweiz: Immer mehr Ukraine-Flüchtlinge suchen einen Job",
      date: "10. MAI. 2022",
    },
  ];
  return (
    <Main>
      <Pic className="media-1-1 " style={{ backgroundImage: `url(${pic})` }} />
      <IntroDescBox>
        <Square />
        <IntroDesc> {introDesc}</IntroDesc>
      </IntroDescBox>
      <P>{desc}</P>
      <ShareBox>
        <HiShare size={28} />
        <Share>Share</Share>
      </ShareBox>
      <NewsList data={data} border w={300} h={200} />
      <LocalFooter />
      <LeaveComment />
    </Main>
  );
}

export default LeftSection;
