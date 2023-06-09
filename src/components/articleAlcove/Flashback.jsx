import React from "react";
import tw from "twin.macro";
import AsideVideos from "./AsideVideos";
import Img1 from "../../assets/images/flash-img-1.png";
import Img2 from "../../assets/images/flash-img-2.png";
import Image from "next/image";
const Container = tw.div`box-border mb-24 flex justify-between`;
const LeftContainer = tw.div`box-border w-[803px]`;
const Content = tw.div`box-border w-[100%] grid grid-cols-2 grid-rows-1 gap-6 lg:h-[635px]`;
const Item = tw.div`box-border flex flex-col justify-between`;
const H1 = tw.a`text-[#001436] font-poppins text-[1.37rem] uppercase font-extrabold  lg:h-[120px] hover:underline`;
const H11 = tw.h1`font-black uppercase text-xl text-left font-poppins text-[#323030] lg:mb-4`;
const P = tw.p`text-[#323030] uppercase font-poppins font-light lg:h-[160px]`;
const Date = tw.p`text-[#323030] uppercase font-poppins font-light`;
const Author = tw.p`font-poppins font-bold text-[#323030]`;
const Extra = tw.div`flex items-center justify-between`;
function Flashback() {
  return (
    <Container>
      <LeftContainer>
        <H11>Unmissable Article</H11>
        <Content>
          <Item>
            <Image src={Img1} alt="" />
            <H1 href="https://dynaskills-dynajobs.com/our-analyses">
              Ressourcen-Engpass:Entwicklung 2023 – 2025
            </H1>
            <P>
              Der Ressourcen-Engpass hatte 2022 erste dramatische Auswirkungen:
              Die Preise stiegen, es kam zu Lieferengpässen bei Medikamenten und
              Industriegütern und zu Notständen im Gesundheitswesen. Kann das
              Steuer noch herumgerissen werden?
            </P>
            <Extra>
              <Date>14.12.2022</Date>
              <Author>By TINO SENONER</Author>
            </Extra>
          </Item>
          <Item>
            <Image src={Img2} alt="" />
            <H1 href="https://dynaskills-dynajobs.com/our-analyses">
              Kommender Fachkräftemangel & globaler Ressourcen-Engpass
            </H1>
            <P>
              Analyse des Fachkräftemangels, wie er heute von den Unternehmen
              wahrgenommen wird, und dem kommenden globalen Ressourcen-Engpass
              mit wirtschaftlichen Folgekosten von CHF 60 Bio.
            </P>
            <Extra>
              <Date>14.12.2022</Date>
              <Author>By TINO SENONER</Author>
            </Extra>
          </Item>
        </Content>
      </LeftContainer>
      <AsideVideos />
    </Container>
  );
}

export default Flashback;
