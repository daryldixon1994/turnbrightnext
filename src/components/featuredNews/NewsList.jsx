import React from "react";
import tw from "twin.macro";
import NewsItem from "./NewsItem";

const Container = tw.div`box-border overflow-x-auto w-[100%] flex gap-[20px] lg:my-8`;

function NewsList({ data, h, p, border }) {
  return (
    <Container
      className="news-scroll-box"
      style={{ height: `${h}px`, padding: `${p}px` }}
    >
      {data.map((elt, i) => (
        <NewsItem {...elt} key={i} border={border} />
      ))}
    </Container>
  );
}

export default NewsList;
