import React, { useState } from "react";
import tw from "twin.macro";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import ArticleItem from "./ArticleItem";
import BecomeMember from "../fansClub/BecomeMember";
const Container = tw.div`box-border `;
const UpSection = tw.div`box-border flex justify-between`;
const H1 = tw.h1`font-poppins font-medium uppercase text-2xl text-[#001436]`;
const Span = tw.span`font-extrabold bg-[#FECB36] px-1`;
const Arrows = tw.div`box-border flex gap-1`;
const ArrowBox = tw.div`box-border bg-[#FECB36] hover:bg-[rgb(254, 203, 54, 0.7)]`;
const ArticlesList = tw.div`box-border flex gap-10 lg:mt-4 lg:mb-20`;
function FanLatestArticles() {
  const [counter, setCounter] = useState(0);
  const articles = [
    {
      author: "Stephan Werner",
      date: "03 JULY 2023",
      body: "What are the future prospects for AI with Generation Z",
      imgCover: "/images/cover1.png",
    },
    {
      author: "Stephan Werner",
      date: "03 JULY 2023",
      body: "What are the future prospects for AI with Generation Z",
      imgCover: "/images/cover2.png",
    },
    {
      author: "Stephan Werner",
      date: "03 JULY 2023",
      body: "What are the future prospects for AI with Generation Z",
      imgCover: "/images/cover3.png",
    },
    {
      author: "Stephan Werner",
      date: "03 JULY 2023",
      body: "What are the future prospects for AI with Generation Z",
      imgCover: "/images/cover3.png",
    },
    {
      author: "Stephan Werner",
      date: "03 JULY 2023",
      body: "What are the future prospects for AI with Generation Z",
      imgCover: "/images/cover3.png",
    },
    {
      author: "Stephan Werner",
      date: "03 JULY 2023",
      body: "What are the future prospects for AI with Generation Z",
      imgCover: "/images/cover3.png",
    },
    {
      author: "Stephan Werner",
      date: "03 JULY 2023",
      body: "What are the future prospects for AI with Generation Z",
      imgCover: "/images/cover3.png",
    },
    {
      author: "Stephan Werner",
      date: "03 JULY 2023",
      body: "What are the future prospects for AI with Generation Z",
      imgCover: "/images/cover2.png",
    },
    {
      author: "Stephan Werner",
      date: "03 JULY 2023",
      body: "What are the future prospects for AI with Generation Z",
      imgCover: "/images/cover2.png",
    },
  ];
  return (
    <Container>
      <UpSection>
        <H1>
          Dive into the <Span>Latest Article</Span> by a Turn B Right Member
        </H1>
        <Arrows>
          <ArrowBox style={{ cursor: counter < 3 ? "not-allowed" : "pointer" }}>
            <MdOutlineKeyboardArrowLeft
              color="#001436"
              size={30}
              onClick={() => {
                counter >= 3 && setCounter(counter - 3);
              }}
            />
          </ArrowBox>
          <ArrowBox
            style={{
              cursor:
                counter + 3 === articles.length ? "not-allowed" : "pointer",
            }}
          >
            <MdOutlineKeyboardArrowRight
              color="#001436"
              size={30}
              onClick={() => {
                counter + 3 < articles.length && setCounter(counter + 3);
              }}
            />
          </ArrowBox>
        </Arrows>
      </UpSection>
      <ArticlesList>
        {articles.map((article, i) => {
          return (
            counter <= i &&
            i < counter + 3 && <ArticleItem {...article} key={i} />
          );
        })}
      </ArticlesList>
      <BecomeMember />
    </Container>
  );
}

export default FanLatestArticles;
