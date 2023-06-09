import React from "react";
import tw from "twin.macro";
import Logo from "../../assets/images/logo.svg";
import Image from "next/image";
import SocialMedia from "../common/SocialMedia";
const Container = tw.div`box-border relative w-[100%] min-h-[350px] lg:mt-16 border-2 border-black flex flex-col justify-center`;
const Bande = tw.div`min-h-[280px] bg-[rgb(0, 20, 54, 0.5)]`;
const LeftBox = tw.div`box-border bg-[rgb(0, 20, 54)] h-[350px] w-[18%] absolute top-0 left-[2%] z-auto flex justify-center`;
const SocialBox = tw.div`flex justify-end m-0`;
const Title = tw.h1`font-poppins`
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
      </LeftBox>
      <Bande></Bande>
      <SocialBox>
        <SocialMedia />
      </SocialBox>
    </Container>
  );
}

export default LocalFooter;
