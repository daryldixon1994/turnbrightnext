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
    },
    {
      title:
        "ICT-2030: Der Umbruch hat begonnen, neue Entwickler erobern den Markt ",
      date: "29. mar. 2023",
    },
    {
      title:
        "«Die Geschlechterungleichheit am Arbeitsmarkt wird 2030 gegessen sein» ",
      date: "17 FEB 2023",
    },
    {
      title: "Schweiz: Immer mehr Ukraine-Flüchtlinge suchen einen Job",
      date: "10. MAI. 2022",
    },
    {
      title: "Schweiz: Immer mehr Ukraine-Flüchtlinge suchen einen Job",
      date: "10. MAI. 2022",
    },
  ];
  return (
    <Container>
      <Header1 title1={"Featured"} title2={"NEWS"} />
      <NewsList data={data} h={180} p={4} border={true} />
      <Media />
    </Container>
  );
}

export default FeaturedNews;
