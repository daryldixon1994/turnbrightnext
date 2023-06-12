import React from "react";
import tw from "twin.macro";
import Header1 from "../common/Header1";
import VideoList from "./VideoList";
import Image from "next/image";
import Video from "@/assets/images/video.png";
import { data } from "./data";
import Link from "next/link";
import Signature from "../common/Signature";
const Container = tw.div`box-border`;
const SubContainer = tw.div` w-[64%]`;
const ContentZone = tw.div` flex justify-between lg:mt-4`;
const Headers = tw.div`box-border mt-8 mb-8`;
const Line1 = tw.div`lg:h-[2.5px] lg:w-[525px] bg-[#001436]`;
const Head = tw.div`flex items-center justify-center gap-[5px] mx-auto`;
const H1 = tw.h1`text-4xl uppercase text-[#001436] font-poppins`;
const H2 = tw(H1)` ml-2 font-black `;
const SecHead = tw(H1)`text-2xl ml-2`;
const Body = tw.div`box-border mb-24 w-[100%]`;
const P = tw.p`text-[#323030] uppercase leading-relaxed lg:mt-4 font-poppins font-medium`;
const Link2 = tw.span`text-[#323030] uppercase leading-relaxed lg:mt-4 font-poppins  inline font-black hover:underline hover:cursor-pointer`;
const VideoContainer = tw.div`w-[100%]`;
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
      <ContentZone>
        {data.map((elt, i) => (
          <SubContainer key={i}>
            <Headers>
              <H2>{elt.title}</H2>
              <SecHead>{elt.subtitle}</SecHead>
            </Headers>
            <Body>
              <VideoContainer>
                <Extink
                  href="https://www.youtube.com/watch?v=9SJCxBC_RlM&ab_channel=dynaskillsLtd."
                  target="_blank"
                >
                  <img src={elt.pic} alt="" />
                </Extink>
                <P>
                  <span style={{ fontWeight: "900" }}>
                    {elt.introDesc.split("/")[0]}
                  </span>
                  &quot;{elt.introDesc.split("/")[1]}&quot;.
                </P>
                <P>
                  {elt.desc.split("/")[0]}...
                  <Link href={`/videos/recent-videos/${elt.id}`}>
                    <Link2>see more</Link2>
                  </Link>
                </P>
                <Signature
                  date="14.12.2022"
                  time="00:02"
                  author="TINO SENONER"
                  iconColor="#323030"
                />
              </VideoContainer>
            </Body>
          </SubContainer>
        ))}
        <VideoList />
      </ContentZone>
    </Container>
  );
}

export default RecentVideos;
