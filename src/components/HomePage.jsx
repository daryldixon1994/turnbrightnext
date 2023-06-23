"use client";
import React from "react";
import IntroSection from "@/components/home/IntroSection";
import tw from "twin.macro";
import FeaturedNews from "./featuredNews/FeaturedNews";
import OurEvent from "./OurEvent/OurEvent";
import ArticleAlcove from "./articleAlcove/ArticleAlcove";
import RecentVideos from "./recentVideos/RecentVideos";
import FanClub from "./fansClub/FanClub";
import GlanceAbout from "./glanceAbout/GlanceAbout";
// import ContactUs from "./contactUs/ContactUs";
// import RecentNews from "@/components/main/RecentNews";
// import RecentVideos from "@/components/main/RecentVideos";
const Container = tw.div`box-border`;
const Main = tw.main`max-w-screen-xl mx-auto min-h-[694px] lg:mb-10`;
function HomePage() {
  return (
    <Container>
      {/* <ContactUs /> */}
      <IntroSection />
      <Main>
        <GlanceAbout />
        <FeaturedNews />
        <OurEvent />
        <ArticleAlcove />
        <RecentVideos />
        <FanClub />
      </Main>
    </Container>
  );
}

export default HomePage;
