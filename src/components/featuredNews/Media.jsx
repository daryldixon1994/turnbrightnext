import React from "react";
import Link from "next/link";
import tw from "twin.macro";
import { data } from "./data";
const Container = tw.div``;
const Img1 = tw.div`box-border min-h-[500px] flex flex-col justify-end transition duration-700 ease-in-out hover:scale-95`;
const Text1 = tw.p`box-border p-4 bg-[rgb(22, 22, 22, 0.2)] text-center font-poppins font-semibold uppercase text-2xl text-[white] w-[90%] mx-auto`;
const Content = tw.div`box-border lg:mb-2`;
const Extra = tw.div`box-border flex items-center justify-around`;
const DateAuthor = tw.p`font-poppins p-0  text-white m-0 text-center uppercase text-sm font-medium`;
// const Author = tw.p`font-poppins p-0  text-white m-0 text-center uppercase text-sm`;

function Media() {
  return (
    <Container className="media-grid">
      {data.map((elt, i) => (
        <Link key={i} href={`/news/featured-news/${elt.id}`}>
          <Img1
            className="media-1"
            style={{ backgroundImage: `url(${elt.pic})` }}
          >
            <Content>
              <Text1>{elt.title}</Text1>
              <Extra>
                <DateAuthor>{elt.date}</DateAuthor>
                <DateAuthor>By {elt.author}</DateAuthor>
              </Extra>
            </Content>
          </Img1>
        </Link>
      ))}
    </Container>
  );
}

export default Media;
