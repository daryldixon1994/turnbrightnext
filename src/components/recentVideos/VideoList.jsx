import React from "react";
import tw from "twin.macro";
import Image from "next/image";
import Img from "../../assets/images/swiss.png";
// import "./styles.css";
const Container = tw.div`w-[32%] box-border lg:h-[446.5px] flex flex-col overflow-y-auto px-4 py-4 font-poppins text-[#323030] shadow-gray-500 rounded-lg lg:mb-10`;
const SubContainer = tw.div``;
const Title = tw.h4`ml-[15px] text-left uppercase text-[#001436] text-lg font-bold`;
const VideoItem = tw.div`box-border mb-4 p-1`;
const videos = [
  {
    title: "Switzerland -  Mutual Respect",
  },
  {
    title: "Switzerland - is facing a new challenge",
  },
  {
    title: "Switzerland - Punctuality",
  },
];
function AsideVideos() {
  return (
    <Container className="news-scroll-box" id="aside-video-sugg">
      {videos.map((video, i) => (
        <VideoItem key={i}>
          <Image src={Img} alt="" />
          <Title> {video.title} </Title>
        </VideoItem>
      ))}
    </Container>
  );
}

export default AsideVideos;
