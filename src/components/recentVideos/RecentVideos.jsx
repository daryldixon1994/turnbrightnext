import React from "react";
import tw from "twin.macro";
import Header1 from "../common/Header1";
import VideoList from "./VideoList";
import Image from "next/image";
import Video from "@/assets/images/video.png";
import Signature from "../common/Signature";
const Container = tw.div``;
const Headers = tw.div`box-border mt-16 mb-8`;
const Line1 = tw.div`lg:h-[2.5px] lg:w-[525px] bg-[#001436]`;
const Head = tw.div`flex items-center justify-center gap-[5px] mx-auto`;
const H1 = tw.h1`text-4xl uppercase text-[#001436] font-poppins`;
const H2 = tw(H1)` ml-2 font-black `;
const SecHead = tw(H1)`text-2xl ml-2`;
const Body = tw.div`box-border mb-24 flex justify-between`;
const P = tw.p`text-[#323030] uppercase leading-relaxed lg:mt-4 font-poppins font-medium`;
const Link = tw.span`text-[#323030] uppercase leading-relaxed lg:mt-4 font-poppins  inline font-black hover:underline hover:cursor-pointer`;
const VideoContainer = tw.div`w-[60%]`;
const Extink = tw.a``;
// const Image = tw.img`w-[803px]`;
// Image.defaultProps = {
//   src: Video,
// };
function RecentVideos() {
  return (
    <Container>
      <Head>
        <Line1 />
        <Header1 title1="Recent" title2="Videos" />
        <Line1 />
      </Head>
      <Headers>
        <H2>Passion for Music Unites Generations</H2>
        <SecHead>dynaskills® present Turn B. Right </SecHead>
      </Headers>
      <Body>
        <VideoContainer>
          <Extink
            href="https://www.youtube.com/watch?v=9SJCxBC_RlM&ab_channel=dynaskillsLtd."
            target="_blank"
          >
            <Image src={Video} alt="" />
          </Extink>
          <P>
            <span style={{ fontWeight: "900" }}>
              The Challenge of Connecting generations
            </span>
            &quot;Bridging generations can be tougher than bridging distant
            villages over continents&quot;.
          </P>
          <P>
            Turn B. Right is a representative of Generation Z. The life ahead of
            him is much longer than what is already behind him. He is not
            hindered by years of experience and vividly envisions how he will
            change the world according to his own ideas...<Link> see more</Link>
          </P>
          <Signature
            date="14.12.2022"
            time="00:02"
            author="TINO SENONER"
            iconColor="#323030"
          />
        </VideoContainer>
        <VideoList />
      </Body>
    </Container>
  );
}

export default RecentVideos;
