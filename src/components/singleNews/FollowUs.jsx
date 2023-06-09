import React from "react";
import tw from "twin.macro";
import { BsFacebook, BsYoutube } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiInstagramFill, RiLinkedinBoxFill } from "react-icons/ri";
import { FaTiktok } from "react-icons/fa";
const SocialLinksContainer = tw.div`w-[100%] min-h-[100px] lg:my-8`;
const SocialLink = tw.a`cursor-pointer text-black text-base border-solid border-[1.5px] px-2 py-1 rounded-lg flex items-center gap-[5px]`;
const SocialLinkFb = tw(SocialLink)`bg-[#1A6DD4] text-white`;
const SocialLinkTw = tw(SocialLink)`bg-[#55ACF2] text-white`;
const SocialLinkLn = tw(SocialLink)`bg-[#0A66C2] text-white`;
const SocialLinkYt = tw(SocialLink)`bg-[#FF2600] text-white`;
const SocialLinkInsta = tw(SocialLink)`bg-[#C13584] text-white`;
const SocialLinkTk = tw(SocialLink)`bg-[#000000] text-white`;
const SocialBody = tw.div`grid grid-cols-2 grid-rows-3 gap-2 w-[100%] lg:mt-2`;
function RightSection() {
  return (
    <SocialLinksContainer>
      <SocialBody>
        <SocialLinkFb
          target="_blank"
          href="https://www.facebook.com/Dynajobs-AG-104046158924976"
        >
          <BsFacebook />
          Facebook
        </SocialLinkFb>
        <SocialLinkTw target="_blank" href="https://twitter.com/TinoSenoner">
          <AiFillTwitterCircle size={20} />
          Twitter
        </SocialLinkTw>
        <SocialLinkLn
          target="_blank"
          href="https://www.youtube.com/channel/UC0Ltsu_2FrfUneg0jk8ol2Q"
        >
          <RiLinkedinBoxFill />
          LinkedIn
        </SocialLinkLn>
        <SocialLinkYt
          target="_blank"
          href="https://www.youtube.com/channel/UC0Ltsu_2FrfUneg0jk8ol2Q"
        >
          <BsYoutube />
          Youtube
        </SocialLinkYt>
        <SocialLinkInsta
          target="_blank"
          href="https://www.youtube.com/channel/UC0Ltsu_2FrfUneg0jk8ol2Q"
        >
          <RiInstagramFill />
          Instagram
        </SocialLinkInsta>
        <SocialLinkTk
          target="_blank"
          href="https://www.youtube.com/channel/UC0Ltsu_2FrfUneg0jk8ol2Q"
        >
          <FaTiktok />
          Tik Tok
        </SocialLinkTk>
      </SocialBody>
    </SocialLinksContainer>
  );
}

export default RightSection;
