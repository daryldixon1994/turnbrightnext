import React from "react";
import tw from "twin.macro";
import TitleWithBackground from "../common/TitleWithBackground";
import Weather from "./Weather";
import Currency from "./Currency";
import Languages from "./Languages";
import Image from "next/image";

const Container = tw.div`box-border lg:mb-28 flex justify-between`;
const Left = tw.div`box-border w-[50%]`;
const Right = tw.div`box-border w-[47%]`;
const DataBox = tw.div`box-border flex gap-2 mt-8`;
const H1 = tw.h1`font-extrabold inline font-poppins  text-[#001436] text-4xl uppercase`;
const RBox = tw.div`bg-[#FECB36] rounded-b-2xl w-fit px-2 font-black font-poppins text-[#001436] text-4xl h-16 flex flex-col justify-end`;
const IntroBoxR = tw.div`flex items-end -mt-[0.75rem]`;
const Media = tw.div` min-h-[350px] flex items-center justify-center relative`;
const SubMedia = tw.div`box-border w-[100%] flex justify-center `;
const P = tw.p`font-poppins text-[#001436] text-lg font-medium`;
const LeftImage = tw.div`box-border flex-1  h-[202px] rounded-3xl`;
const RightImage = tw.div`box-border flex-1  h-[327px] rounded-3xl`;
const StartNow = tw.button`w-fit bg-[#FECB36] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] px-4 py-2 font-poppins text-[#001436] text-lg font-bold rounded-full border-4 border-white`;
const HornBox = tw.div`bg-[#FECB36] border-4 border-white w-12 h-20 absolute top-3 right-0 rounded-full`;
const ArrowBox = tw.div`box-border flex justify-end  w-[90%]`;
const Horn = tw.div`box-border absolute -top-5 -left-2`;
function GlanceAbout() {
  let title = "Rencontre";
  return (
    <Container>
      <Left>
        <TitleWithBackground t1="At a glance about" t2="switzerland" w={350} />
        <DataBox>
          {/* <Weather /> */}
          <Currency />
          <Languages />
        </DataBox>
      </Left>
      <Right>
        <IntroBoxR>
          <RBox>{title[0]}</RBox>
          <H1>encontre</H1>
        </IntroBoxR>
        <P>Seek guidance from market experts for optimal choices</P>
        <ArrowBox>
          <Image src="/images/arrow.png" width={190} height={50} alt="arrow" />
        </ArrowBox>
        <Media>
          <SubMedia>
            <StartNow>Start now</StartNow>
            <HornBox>
              <Horn>
                <Image
                  src="/images/horn.png"
                  width={120}
                  height={50}
                  alt="horn"
                />
              </Horn>
            </HornBox>
            <LeftImage
              style={{
                backgroundImage: "url(/images/RImg1.png)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            />
            <RightImage
              style={{
                backgroundImage: "url(/images/RImg2.png)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            />
          </SubMedia>
        </Media>
      </Right>
    </Container>
  );
}

export default GlanceAbout;
