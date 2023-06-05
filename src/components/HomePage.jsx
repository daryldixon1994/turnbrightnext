import React from "react";
import IntroSection from "@/components/home/IntroSection";
import tw from "twin.macro";
import FeaturedNews from "./featuredNews/FeaturedNews";
import OurEvent from "./OurEvent/OurEvent";
import ArticleAlcove from "./articleAlcove/ArticleAlcove";
import RecentVideos from "./recentVideos/RecentVideos";
// import RecentNews from "@/components/main/RecentNews";
// import RecentVideos from "@/components/main/RecentVideos";
const Container = tw.div`box-border`;
const Main = tw.main`max-w-screen-xl mx-auto min-h-[694px]`;
function HomePage() {
  return (
    <Container>
      <IntroSection />
      <Main>
        <FeaturedNews />
        <OurEvent />
        <ArticleAlcove />
        <RecentVideos />
      </Main>
    </Container>
  );
}

export default HomePage;
