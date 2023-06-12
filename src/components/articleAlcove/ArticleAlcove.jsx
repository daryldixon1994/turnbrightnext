import React from "react";
import tw from "twin.macro";
import Header1 from "../common/Header1";
import ArticleWithLeftImage from "./ArticleWithLeftImage";
import Img from "../../assets/images/article-1.jpg";
import { alcoveData } from "./articleAlcoveData";
import Flashback from "./Flashback";
const Container = tw.div`box-border`;
const Box = tw.div`box-border flex items-center justify-between lg:mb-10`;
const Line = tw.div`h-[2.5px] bg-[#001436] w-[900px]`;

function ArticleAlcove() {
  let data = alcoveData[0];
  return (
    <Container>
      <Box>
        <Header1 title1="The article" title2="Alcove" />
        <Line />
      </Box>
      <ArticleWithLeftImage
        image={data.pic}
        subTitle={data.subTitle}
        title={data.title}
        desc={data.desc}
        date={data.date}
        time={data.time}
        author={data.author}
        link={data.link}
        id={data.id}
        iconColor="#323030"
      />
      <Flashback />
    </Container>
  );
}

export default ArticleAlcove;
