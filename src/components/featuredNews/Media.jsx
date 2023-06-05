import React from "react";
import tw from "twin.macro";

const Container = tw.div``;
const Img1 = tw.div`box-border min-h-[500px] flex flex-col justify-end`;
const Text1 = tw.p`box-border p-4 bg-[rgb(22, 22, 22, 0.2)] text-center font-poppins font-semibold uppercase text-xl text-[white] w-[90%] mx-auto`;
const Content = tw.div`box-border lg:mb-2`;
const Img2 = tw.div`flex flex-col justify-end`;
const Img3 = tw(Img1)``;
const Text2 = tw(Text1)`font-black text-4xl`;
const Text3 = tw(Text1)``;
const Extra = tw.div`box-border flex items-center justify-around`;
const DateAuthor = tw.p`font-poppins p-0  text-white m-0 text-center uppercase text-sm font-medium`;
// const Author = tw.p`font-poppins p-0  text-white m-0 text-center uppercase text-sm`;
function Media() {
  return (
    <Container className="media-grid">
      <Img1 className="media-1">
        <Content>
          <Text1>Fachkräftemangel eröffnet Frauen neue Chancen</Text1>
          <Extra>
            <DateAuthor>17 FEB 2023</DateAuthor>
            <DateAuthor>By tINO SENONER</DateAuthor>
          </Extra>
        </Content>
      </Img1>
      <Img2 className="media-2">
        <Content>
          <Text2>
            Generation Z überholt Babyboomer: So punkten Schweizer Firmen
          </Text2>
          <Extra>
            <DateAuthor>17 FEB 2023</DateAuthor>
            <DateAuthor>By tINO SENONER</DateAuthor>
          </Extra>
        </Content>
      </Img2>
      <Img3 className="media-3">
        <Content>
          <Text3>
            LICT-2030: Der Umbruch hat begonnen, neue Entwickler erobern den
            Markt
          </Text3>
          <Extra>
            <DateAuthor>17 FEB 2023</DateAuthor>
            <DateAuthor>By tINO SENONER</DateAuthor>
          </Extra>
        </Content>
      </Img3>
    </Container>
  );
}

export default Media;
