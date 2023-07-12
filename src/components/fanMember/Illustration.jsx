import React from "react";
import tw from "twin.macro";
import Link from "next/link";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import Image from "next/image";
const Container = tw.div`box-border lg:w-[40%] h-[140vh] flex flex-col justify-between`;
const Head = tw.div`box-border h-[200px] flex flex-col justify-between`;
const BackBox = tw.div`box-border mt-4 w-fit`;
const Back = tw.span`font-bold text-lg font-poppins`;
const Intro = tw.div`box-border mx-auto flex justify-center relative w-fit`;
const Title = tw.h1`font-poppins font-black lg:text-6xl text-5xl text-[#FECB36]`;
const Content = tw.div``;
const P = tw.p`box-border font-poppins text-white lg:text-5xl text-4xl font-black text-center`;
const Footer = tw.footer`box-border flex justify-between p-1 lg:p-4`;
const PoweredRights = tw.p`capitalize lg:text-lg lg:font-semibold text-white font-poppins `;
const Span = tw.span`text-[#FECB36]`;
const Span2 = tw.span`text-[#011E77]`;
const ImgBox = tw.div`absolute -top-14 -left-14 -rotate-45 `;
function Illustration() {
  return (
    <Container
      style={{
        backgroundImage: "url(/images/fan-member-ill.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Head>
        <BackBox>
          <Link href="/" style={{ display: "flex", alignItems: "end" }}>
            <MdOutlineKeyboardArrowLeft size={25} />
            <Back>Back</Back>
          </Link>
        </BackBox>
        <Intro>
          <ImgBox>
            <Image src="/images/logo.svg" width={85} height={85} alt="" />
          </ImgBox>
          <Title>Turn B.Right</Title>
        </Intro>
      </Head>

      <P>
        <Span>As a part</Span> of our group, you&apos;ll have the chance to
        share your ideas, skills, and perspectives, contributing to our
        collective vision.
      </P>

      <Footer>
        <PoweredRights>
          powred by <Span2> dynaskills® LLC</Span2>
        </PoweredRights>
        <PoweredRights>®2023 All rights reserved.</PoweredRights>
      </Footer>
    </Container>
  );
}

export default Illustration;
