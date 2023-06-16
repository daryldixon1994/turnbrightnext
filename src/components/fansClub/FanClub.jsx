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
const TeamSlides = tw.div``;
const Media = tw.div`box-border flex justify-between lg:mt-8 lg:mb-16`;
const Item = tw.div`box-border relative lg:w-[233px] flex flex-col items-center gap-2`;
const ItemImg = tw.div`box-border lg:w-[200px] lg:h-[354px]`;
const Square = tw.div`box-border border-2 border-black w-[100%] h-[300px] absolute top-[10%]`;
const Title = tw.div`box-border`;
const Rectangle = tw.div`w-20 h-10 bg-[#FECB36] mb-[-1.4rem]`;
const H2 = tw.h2`font-poppins font-extrabold text-[#001436] text-4xl uppercase`;
const H3 = tw(H2)`text-xl font-normal`;
const H5 = tw(H2)`text-xl`;
const Box = tw.div`bg-[#FECB36] text-[#001436] w-[100%] lg:min-h-[350px] relative flex flex-col items-center justify-center gap-12 py-32`;
const Circle = tw.div`box-border rounded-full p-2 bg-white w-[150px] h-[150px] absolute bottom-[-6%] left-[-3%]`;
const H1 = tw.h1`font-bold text-6xl font-poppins uppercase`;
const P = tw.p`font-semibold text-xl font-poppins uppercase w-[55%] text-center leading-loose`;
function FanClub() {
  const mediaImgs = [
    { name: "Yonis", pic: "/images/fan-img1.png" },
    { name: "Sarra", pic: "/images/fan-img2.png" },
    { name: "Richard", pic: "/images/fan-img3.png" },
    { name: "Fred", pic: "/images/fan-img4.png" },
    { name: "Elodie", pic: "/images/fan-img5.png" },
  ];

  return (
    <Container>
      <Head>
        <Line1 />
        <Header1 title1="Fan's" title2="Club" />
        <Line2 />
      </Head>
      <TeamSlides>
        <Title>
          <Rectangle />
          <H2>TEAM SLIDES</H2>
        </Title>
        <H3>Unleashing the Power of Collaboration</H3>
        <Media>
          {mediaImgs.map((img, i) => (
            <Item key={i}>
              <ItemImg
                style={{ backgroundImage: `url(${img.pic})` }}
                className="img-container"
              />
              <Square />
              <H5> {img.name} </H5>
            </Item>
          ))}
          {/* <Image src="/images/fan-img-1.png" alt="" width={350} height={350} /> */}
        </Media>
      </TeamSlides>
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
