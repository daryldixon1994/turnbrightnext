import tw from "twin.macro";
import SocialMedia from "../common/SocialMedia";
import Link from "next/link";
import Signature from "../common/Signature";
const Container = tw.div`box-border min-h-[650px] lg:mb-20`;
const Head = tw.div``;
const Body = tw.div`box-border grid grid-cols-2 grid-rows-1 gap-12 lg:mt-6`;
const Content = tw.div`box-border flex flex-col justify-between`;
const Extra = tw.div`box-border flex justify-between`;
const NewExtra = tw.div`box-border flex gap-[10px]`;
const Pic = tw.div`border-2 border-black`;
const NewFooter = tw.footer`flex flex-col items-end`;
const H1 = tw.a`font-poppins font-black text-[#001436] text-5xl mt-0 uppercase hover:underline`;
const H2 = tw.h2`font-poppins font-medium text-[#001436] text-3xl mt-0 uppercase`;
const P = tw.p`font-poppins text-base text-[#323030] uppercase lg:mb-2`;
const NewContent = tw.div``;
function ArticleWithLeftImage({
  subTitle,
  id,
  title,
  image,
  desc,
  date,
  time,
  author,
  p2,
  iconColor,
  link,
}) {
  //   console.log(img);
  //   const Image = tw.img`w-[50%]`;
  //   Image.defaultValue = {
  //     src: img,
  //   };
  return (
    <Container>
      <Head>
        <H2>{subTitle}</H2>
        <H1 href={`${link}`} target="_blank">
          {title}
        </H1>
      </Head>
      <Body>
        {/* <Pic> */}
        <Link href={`/article/article-alcove/${id}`}>
          <img src={image} alt="visit" />
        </Link>
        {/* </Pic> */}
        <Content>
          <div>
            {desc.split("/").map((p, i) => (
              <P key={i}>{p}</P>
            ))}
          </div>
          {!p2 && (
            <Signature
              date={date}
              time={time}
              author={author}
              iconColor={iconColor}
            />
          )}
        </Content>
      </Body>
      {p2 && (
        <NewContent>
          <P>{p2}</P>
          <NewFooter>
            <NewExtra>
              <P>
                Published: {date} at {time}
              </P>
              <P>
                by <span style={{ fontWeight: 900 }}> {author} </span>
              </P>
            </NewExtra>
            <SocialMedia />
          </NewFooter>
        </NewContent>
      )}
    </Container>
  );
}

export default ArticleWithLeftImage;
