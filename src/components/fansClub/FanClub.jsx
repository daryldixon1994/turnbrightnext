import React from "react";
import tw from "twin.macro";
import Header1 from "../common/Header1";
import Image from "next/image";
import Logo from "../../assets/images/logo.svg";
import Arrow from "./Arrow";
import FanArticle from "./FanArticle";
const Container = tw.div`box-border lg:min-h-[1580px] flex flex-col justify-between`;
const Head = tw.div`flex items-center justify-center gap-[5px] mx-auto`;
const Line1 = tw.div`lg:h-[2.5px] lg:w-[830px] bg-[#001436]`;
const Line2 = tw.div`lg:h-[2.5px] lg:w-[240px] bg-[#001436]`;
const Media = tw.div`box-border flex justify-between`;
const Box = tw.div`bg-[#FECB36] text-[#001436] w-[100%] lg:min-h-[350px] relative flex flex-col items-center justify-center gap-12 py-32`;
const Circle = tw.div`box-border rounded-full p-2 bg-white w-[150px] h-[150px] absolute bottom-[-6%] left-[-3%]`;
const H1 = tw.h1`font-bold text-6xl font-poppins uppercase`;
const P = tw.p`font-semibold text-xl font-poppins uppercase w-[55%] text-center leading-loose`;
function FanClub() {
  return (
    <Container>
      <Head>
        <Line1 />
        <Header1 title1="Fan's" title2="Club" />
        <Line2 />
      </Head>
      <Media>
        <Image src="/images/fan-img-1.png" alt="" width={350} height={350} />
        {/* <Image src="/images/fan-img-2.png" alt="" width={350} height={350} /> */}
        <Image src="/images/fan-img-3.png" alt="" width={350} height={350} />
      </Media>
      <Box>
        <H1>Turn B. Right </H1>
        <P>
          Turn B. Right is all about being cool, proactive, and he know, what he
          wants. Exciting news! We&apos;re launching a competition.
        </P>
        <Circle>
          <Image src={Logo} alt="" width={150} height={150} />
        </Circle>
      </Box>
      <Arrow />
      <FanArticle />
    </Container>
  );
}

export default FanClub;
