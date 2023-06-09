import React from "react";
import tw from "twin.macro";
import Header1 from "../common/Header1";
import NewsList from "../featuredNews/NewsList";
import Link from "next/link";
import { dataSecond } from "./data";
import Img1 from "../../assets/images/event-list-img-1.png";
import Img2 from "../../assets/images/event-list-img-2.png";
import Img3 from "../../assets/images/event-list-img-3.png";
import Img4 from "../../assets/images/event-list-img-4.png";
import Img5 from "../../assets/images/event-list-img-5.png";
import Img6 from "../../assets/images/event-list-img-6.png";
const Container = tw.div`box-border lg:min-h-[694px] lg:mb-20`;
const Line1 = tw.div`lg:h-[2.5px] lg:w-[425px] bg-[#001436]`;
const Head = tw.div`flex items-center justify-center gap-[5px] mx-auto`;
const Media = tw.div`box-border lg:min-h-[400px] lg:mt-8 lg:mb-20`;
const TwoCols = tw.div`box-border grid grid-cols-2 grid-rows-1`;
const Col = tw.div`box-border h-[400px] flex flex-col justify-end transition duration-700 ease-in-out hover:scale-95`;
const H1 = tw.h1`uppercase text-white font-poppins font-black text-3xl border-l-[20px] border-l-[#FECB36] h-[150px] pl-4 pt-1 bg-[rgb(63, 63, 63, 0.3)]`;
const data2 = [
  {
    image: Img1,
    title: "Passion for Music Unites Generations",
    date: "22 May 2023",
  },
  {
    image: Img2,
    title: "We need to take the concerns of Generation Z seriously",
    date: "25 apr 2023",
  },
  {
    image: Img3,
    title: "switzerland needs the employees of CreditSuisse.",
    date: "29 mar 2023",
  },
  {
    image: Img4,
    title: "Switzerland The change begins",
    date: "17 FEB 2023",
  },
  {
    image: Img5,
    title: "tHE DEMANDS ON EMPLOYEES ARE CHANGING",
    date: "03 feb 2023",
  },
  {
    image: Img6,
    title: "where are my chances",
    date: "28 feb 2023",
  },
];
function OurEvent() {
  return (
    <Container>
      <Head>
        <Line1 />
        <Header1 title1="discover our" title2="events" />
        <Line1 />
      </Head>
      <Media>
        <TwoCols>
          {dataSecond.map((elt, i) => (
            <Link key={i} href={`/news/featured-news/${elt.id}`}>
              <Col
                className="event-media-col1"
                style={{ backgroundImage: `url(${elt.pic})` }}
              >
                <H1>{elt.title}</H1>
              </Col>
            </Link>
          ))}
          {/* <Col className="event-media-col1">
            <H1>Schweiz: Immer mehr Ukraine-Flüchtlinge suchen einen Job</H1>
          </Col>
          <Col className="event-media-col2">
            <H1>
              Langes Anstehen am Flughafen ist nur der Anfang ++ Energiekrise
              sorgt für grosse Nachfrage nach Solaranlagen
            </H1>
          </Col> */}
        </TwoCols>
        <NewsList data={data2} h={350} p={10} border={false} />
      </Media>
    </Container>
  );
}

export default OurEvent;
