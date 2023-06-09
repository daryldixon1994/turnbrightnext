import React from "react";
import tw from "twin.macro";
import Header1 from "../common/Header1";
import NewsList from "./NewsList";
import Media from "./Media";

const Container = tw.div`box-border lg:mb-28`;
function FeaturedNews() {
  const data = [
    {
      title: "Generation Z überholt Babyboomer: So punkten Schweizer Firmen ",
      date: "25. Apr. 2023",
      link: "https://www.msn.com/de-ch/finanzen/wirtschaft/die-generation-z-%C3%BCberholt-babyboomer-im-schweizer-arbeitsmarkt-so-k%C3%B6nnen-schweizer-firmen-bei-j%C3%BCngeren-arbeitnehmenden-punkten/ar-AA1ahNMi",
    },
    {
      title:
        "ICT-2030: Der Umbruch hat begonnen, neue Entwickler erobern den Markt ",
      date: "29. mar. 2023",
      link: "https://www.netzwoche.ch/news/2023-03-29/ict-2030-der-umbruch-hat-begonnen-neue-entwickler-erobern-den-markt",
    },
    {
      title:
        "«Die Geschlechterungleichheit am Arbeitsmarkt wird 2030 gegessen sein» ",
      date: "17 FEB 2023",
      link: "https://www.blick.ch/wirtschaft/fachkraeftemangel-eroeffnet-frauen-neue-chancen-die-geschlechterungleichheit-am-arbeitsmarkt-wird-2030-gegessen-sein-id18324104.html",
    },
    {
      title: "Schweiz: Immer mehr Ukraine-Flüchtlinge suchen einen Job",
      date: "10. MAI. 2022",
      link: "https://www.srf.ch/play/tv/10-vor-10/video/schweiz-immer-mehr-ukraine-fluechtlinge-suchen-einen-job?urn=urn:srf:video:4a647fcc-c1d0-4c45-8044-894c4c35c141",
    },
    {
      title:
        "Langes Anstehen am Flughafen ist nur der Anfang ++ Energiekrise sorgt für grosse Nachfrage nach Solaranlagen",
      date: "10. MAI. 2022",
      link: "https://www.aargauerzeitung.ch/schweiz/sonntagspresse-langes-anstehen-am-flughafen-ist-nur-der-anfang-energiekrise-sorgt-fuer-grosse-nachfrage-nach-solaranlagen-ld.2315545",
    },
  ];
  return (
    <Container>
      <Header1 title1={"Featured"} title2={"NEWS"} />
      <NewsList data={data} h={160} p={4} border={true} w={400} itemH={120} />
      <Media />
    </Container>
  );
}

export default FeaturedNews;
