import React from "react";
import tw from "twin.macro";
import Header1 from "../common/Header1";
import ArticleWithLeftImage from "./ArticleWithLeftImage";
import Img from "../../assets/images/article-1.jpg";
import Flashback from "./Flashback";
const Container = tw.div`box-border`;
const Box = tw.div`box-border flex items-center justify-between lg:mb-10`;
const Line = tw.div`h-[2.5px] bg-[#001436] w-[900px]`;

function ArticleAlcove() {
  return (
    <Container>
      <Box>
        <Header1 title1="The article" title2="Alcove" />
        <Line />
      </Box>
      <ArticleWithLeftImage
        image={Img}
        subTitle="Facing Acute Skilled Labor Shortage"
        title="73,000 Swiss Managers at Risk of Job Loss!"
        desc={`Der Fachkräftemangel führt paradoxerweise dazu, dass Menschen arbeitslos werden. In der Schweiz droht 73'000 Führungskräften der Jobverlust bis 2025./
         Das bremst die Wirtschaft um rund 18 Prozent. Grosskonzerne immer mehr Arbeit ins Ausland verlagern werden, und Führungspositionen ins Ausland abhängen. Die neue Arbeitswelt durch Corona mitschuldigt die drohenden Jobverlust für 73'000 Führungskräfte./ 
        In Zeiten von Homeoffice sind hierarchien flacher geworden, und die Angestellten übernehmen mehr Eigenverantwortung. Grosskonzerne Kaderleute entstehen Strukturen mit reinen Führungskräften, und Chefs von KMU und mittelgrossen Unternehmen nicht vor dem drohenden Kahlschlag auf den Teppichetagen forchten müssen./
         Personalführungskader haben auf dem Arbeitsmarkt nur Chancen, wenn sie über gefragte Fachwissen verfügen. A Branchenwechsel dürfte unumgänglich sein für viele Credit-Suisse-Kaderleute, wenn eine massiver Stellenabbau umgesetzt wird.
              `}
        date="14.12.2022"
        time="00:02"
        author=" TINO SENONER"
        iconColor="#323030"
      />
      <Flashback />
    </Container>
  );
}

export default ArticleAlcove;
