import React from "react";
import tw from "twin.macro";
import FollowUs from "./FollowUs";
import Image from "next/image";
import LilLogo from "./img/minilogo.png";
import Pic1 from "./img/asideImg.png";
import Pic2 from "./img/upskilling.png";
const Main = tw.div`box-border w-[20%]   min-h-[400px]`;
const H1 = tw.h1`m-0 text-2xl text-[#001436] font-poppins font-bold border-b-2 border-b-[#001436] w-fit`;
const L1 = tw.div`border-b-[0.1px] border-b-[rgba(0, 20, 54, 0.3)]`;
const About = tw.div`box-border flex flex-col items-center justify-between lg:mt-4 min-h-[130px]`;
const Desc = tw.p`uppercase text-[#001436] font-semibold text-sm font-poppins text-center`;
const Aside = tw.aside`lg:mt-40 `;
function RightSection() {
  return (
    <Main>
      <L1>
        <H1>Follow us</H1>
      </L1>
      <FollowUs />
      <L1>
        <H1>About us</H1>
      </L1>
      <About>
        <Image src={LilLogo} alt="" width={150} height={100} />
        <Desc>
          dynaskills® sind Plattformen, die alle zu einem Hauptziel
          zusammenführt: Menschen dab
        </Desc>
      </About>
      <Aside>
        <Image
          src={Pic1}
          alt=""
          width={336}
          height={490}
          style={{ marginBottom: "1.015rem" }}
        />
        <Image src={Pic2} alt="" width={337} height={152} />
      </Aside>
     
    </Main>
  );
}

export default RightSection;
