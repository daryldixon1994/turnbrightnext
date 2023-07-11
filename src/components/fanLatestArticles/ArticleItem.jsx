import React from "react";
import tw from "twin.macro";

const Container = tw.div`box-border flex-1 h-[555px]`;
const SubContainer = tw.div`box-border h-[555px] bg-[rgb(254, 203, 54, 0.5)] flex flex-col justify-between`;
const Head = tw.div`box-border flex justify-between lg:mt-4`;
const AuthorAndDate = tw.h1`font-poppins font-bold uppercase text-base text-[#001436]`;
const Bottom = tw.div`box-border h-[250px] flex flex-col justify-between`;
const Desc = tw.p`font-poppins font-extrabold uppercase text-2xl text-[#001436]`;
const ReadMore = tw.button`self-end bg-[#001436] font-poppins text-[#FECB36] py-1 px-3 font-bold lg:m-2`;
function ArticleItem({ author, date, body, imgCover }) {
  return (
    <Container
      style={{
        backgroundImage: `url(${imgCover})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <SubContainer>
        <Head>
          <AuthorAndDate> {author} </AuthorAndDate>
          <AuthorAndDate> {date} </AuthorAndDate>
        </Head>
        <Bottom>
          <Desc>{body}</Desc>
          <ReadMore>Read more</ReadMore>
        </Bottom>
      </SubContainer>
    </Container>
  );
}

export default ArticleItem;
