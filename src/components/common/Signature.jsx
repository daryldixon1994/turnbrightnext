import React from "react";
import tw from "twin.macro";
import SocialMedia from "./SocialMedia";
const Footer = tw.footer`lg:mt-4`;
const Extra = tw.div`box-border flex justify-between`;
const P = tw.p`font-poppins text-base text-[#323030] uppercase lg:mb-2`;

function Signature({ date, time, author, iconColor }) {
  return (
    <Footer>
      <Extra>
        <P>
          Published: {date} at {time} Hour
        </P>
        <P>
          by <span style={{ fontWeight: 900 }}> {author} </span>
        </P>
      </Extra>
      <SocialMedia colorIcon={iconColor} />
    </Footer>
  );
}

export default Signature;
