import React from "react";
import tw from "twin.macro";
import ArticleSchema from "./ArticleSchema";
import { fanData } from "./data";

const Container = tw.div`box-border lg:flex lg:justify-between lg:min-h-[600px]`;
const RightBloc = tw.div`box-border w-[25%] flex flex-col justify-between`;
const H1 = tw.h1`font-poppins font-medium uppercase text-3xl text-[#001436]`;
const Span = tw.span`font-extrabold`;
const Square = tw.div`bg-[#FECB36] h-[280px] w-[100%] p-4 flex flex-col justify-between`;
const Circle = tw.div`box-border bg-[#D9D9D9] w-[150px] h-[150px] rounded-full`;
const Author = tw.h3`font-poppins text-[#001436] font-extrabold text-2xl uppercase`;
const Status = tw.h5`font-poppins text-[#001436] font-normal text-lg uppercase`;
function FanArticle() {
  return (
    <Container>
      <ArticleSchema />
      <RightBloc>
        <H1>
          Insights from Turn B. Right <Span> Members </Span>
        </H1>
        <Square>
          <Circle />
          <div>
            <Author>{fanData[0].author}</Author>
            <Status>Turn B. Right Members</Status>
          </div>
        </Square>
      </RightBloc>
    </Container>
  );
}

export default FanArticle;
