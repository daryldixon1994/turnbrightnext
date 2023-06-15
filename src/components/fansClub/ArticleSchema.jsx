import React from "react";
import tw from "twin.macro";
import { BsArrowRightShort } from "react-icons/bs";
import { fanData } from "./data";
import Link from "next/link";
const Container = tw.div`box-border w-[72%] flex flex-col justify-between`;
const ImgContainer = tw.div`box-border min-h-[300px]`;
const H1 = tw.h1`font-poppins font-extrabold text-[#001436] uppercase text-3xl`;
const P = tw.p`font-poppins text-[#323030] uppercase`;
const Extra = tw.div`box-border flex justify-between`;
const Signature = tw.div`box-border flex gap-12`;
const Date = tw.p`font-poppins text-[#323030] uppercase`;
const Author = tw.p`font-poppins text-[#323030] uppercase`;
const ReadMore = tw.span`font-poppins uppercase text-[#001436] font-bold flex items-center hover:underline cursor-pointer`;
function ArticleSchema() {
  return (
    <Container>
      <ImgContainer
        className="img-container"
        style={{ backgroundImage: `url(${fanData[0].pic})` }}
      />
      <H1>{fanData[0].title}</H1>
      <P>{fanData[0].introDesc}</P>
      <Extra>
        <Signature>
          <Date>{fanData[0].date}</Date>
          <Author>
            by <span style={{ fontWeight: 700 }}> {fanData[0].author}</span>
          </Author>
        </Signature>
        <Link href={`/article/turn-b-right-members/${fanData[0].id}`}>
          <ReadMore>
            Read more <BsArrowRightShort size={28} />
          </ReadMore>
        </Link>
      </Extra>
    </Container>
  );
}

export default ArticleSchema;
