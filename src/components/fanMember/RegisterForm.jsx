import Image from "next/image";
import React from "react";
import tw from "twin.macro";
import { BsFacebook, BsYoutube } from "react-icons/bs";
import { AiFillTwitterCircle, AiOutlineGooglePlus } from "react-icons/ai";
import { RiInstagramFill, RiLinkedinBoxFill } from "react-icons/ri";
import { FaTiktok } from "react-icons/fa";
import MemberForm from "./MemberForm";
const Container = tw.div`box-border lg:w-[60%] lg:pb-0 pb-16 lg:h-[140vh]`;
const SubContainer = tw.div`box-border w-[80%] mx-auto `;
const Logo = tw.div` flex justify-center p-4`;
const Intro = tw.div` flex flex-col justify-center items-center p-4`;
const H1 = tw.h1`text-[#001436] font-poppins font-black text-3xl uppercase`;
const P = tw.p`text-[#001436] font-poppins font-light text-xl uppercase`;
const SocialBody = tw.div`grid grid-cols-2 grid-rows-3 gap-x-20 gap-y-2 w-[100%] lg:mt-6 mx-auto`;
const FBSocialLink = tw.a`cursor-pointer text-white hover:text-gray-100 text-lg bg-[#1877F2] p-1 rounded-lg flex items-center justify-center gap-[5px] `;
const TwSocialLink = tw.a`cursor-pointer text-white hover:text-gray-100 text-lg bg-[#1DA1F2] p-1 rounded-lg flex items-center justify-center gap-[5px] `;
const LnSocialLink = tw.a`cursor-pointer text-white hover:text-gray-100 text-lg bg-[#0E76A8] p-1 rounded-lg flex items-center justify-center gap-[5px] `;
const InsSocialLink = tw.a`cursor-pointer text-white hover:text-gray-100 text-lg bg-gradient-to-r from-[#5D46D2] via-[#DB2B74] to-[#FE8F35] p-1 rounded-lg flex items-center justify-center gap-[5px] `;
const TkSocialLink = tw.a`cursor-pointer text-white hover:text-gray-100 text-lg bg-gradient-to-r from-[#000000] via-[#FE2C55] to-[#25F4EE] p-1 rounded-lg flex items-center justify-center gap-[5px] `;
const GSocialLink = tw.a`cursor-pointer text-white hover:text-gray-100 text-lg bg-[#DB4A39] p-1 rounded-lg flex items-center justify-center gap-[5px] `;
function RegisterForm() {
  return (
    <Container>
      <Logo>
        <Image
          src="/images/logo.svg"
          width={200}
          height={200}
          alt="turnbright_logo"
        />
      </Logo>
      <Intro>
        <H1>Registration</H1>
        <P>i WANNA bE A mEMBER IN tURN B. rIGHT</P>
      </Intro>
      <SubContainer>
        <SocialBody>
          <FBSocialLink
            target="_blank"
            href="https://www.facebook.com/Dynajobs-AG-104046158924976"
          >
            <BsFacebook />
            Facebook
          </FBSocialLink>
          <TkSocialLink
            target="_blank"
            href="https://www.youtube.com/channel/UC0Ltsu_2FrfUneg0jk8ol2Q"
          >
            <FaTiktok />
            Tik Tok
          </TkSocialLink>
          <TwSocialLink target="_blank" href="https://twitter.com/TinoSenoner">
            <AiFillTwitterCircle />
            Twitter
          </TwSocialLink>
          <LnSocialLink
            target="_blank"
            href="https://www.youtube.com/channel/UC0Ltsu_2FrfUneg0jk8ol2Q"
          >
            <RiLinkedinBoxFill />
            LinkedIn
          </LnSocialLink>
          <InsSocialLink
            target="_blank"
            href="https://www.youtube.com/channel/UC0Ltsu_2FrfUneg0jk8ol2Q"
          >
            <RiInstagramFill />
            Instagram
          </InsSocialLink>
          <GSocialLink
            target="_blank"
            href="https://www.youtube.com/channel/UC0Ltsu_2FrfUneg0jk8ol2Q"
          >
            <AiOutlineGooglePlus size={20} />
            Google+
          </GSocialLink>
        </SocialBody>
        <MemberForm />
      </SubContainer>
    </Container>
  );
}

export default RegisterForm;
