import React from "react";
import tw from "twin.macro";
import Logo from "../../assets/images/logo.svg";
import Image from "next/image";
import SocialMedia from "../common/SocialMedia";
const Container = tw.div`box-border relative w-[100%] min-h-[350px] lg:mt-16 flex flex-col justify-center lg:mb-20`;
const Bande = tw.div`min-h-[280px] bg-[rgb(0, 20, 54, 0.5)] relative`;
const LeftBox = tw.div`box-border bg-[rgb(0, 20, 54)] h-[350px] w-[18%] absolute top-0 left-[2%] z-auto flex justify-center`;
const SocialBox = tw.div`flex justify-end m-0`;
const Title = tw.h1`font-poppins text-[#001436] text-5xl font-bold absolute top-[-10%] left-[25%] uppercase`;
const P = tw.p`font-poppins text-xl lg:ml-[15rem] lg:mt-10 uppercase text-[#001436] font-semibold`;
const Content = tw.div`lg:mt-12 z-10 flex flex-col items-center justify-around`;
const Box = tw.div`flex flex-col items-center`
const H2 = tw.h3`font-poppins font-extrabold text-2xl text-[#FECB36] uppercase`;
const H22 = tw(H2)`font-medium uppercase lg:mt-4`;
const P1 = tw.p`font-poppins font-medium uppercase text-lg text-[#FECB36] text-center w-[70%]`;
function LocalFooter() {
  return (
    <Container>
      <LeftBox>
        <Image
          src={Logo}
          alt=""
          width={140}
          height={140}
          className="local-log-image"
        />
        <Content>
          <Box>
            <H2>Cool</H2>
            <H22>proactive</H22>
          </Box>
          <P1>he know what he wants</P1>
        </Content>
      </LeftBox>
      <Bande>
        <Title>Turn B. Right</Title>
        <P>
          is a representative of Generation Z. The life ahead of him is much
          longer than what is already behind him. He is not hindered by years of
          experience and vividly envisions how he will change the world
          according to his own ideas.
        </P>
        <P>
          <span style={{ color: "#FECB36" }}>Turn B. Right</span> is all about
          being cool, proactive, and he know, what he wants. Exciting news!
          We&apos;re launching a competition.
        </P>
      </Bande>
      <SocialBox>
        <SocialMedia />
      </SocialBox>
    </Container>
  );
}

export default LocalFooter;
