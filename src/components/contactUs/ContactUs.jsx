import React from "react";
import tw from "twin.macro";
import { BsFillHandIndexFill } from "react-icons/bs";
const Container = tw.div`fixed z-20 right-0 top-[30%] bg-[#FECB36] text-[#001436] flex flex-col items-center justify-center py-2 w-[50px] hover:cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-[#001436] hover:text-[#FECB36]   duration-300
`;
const Title = tw.h5`font-poppins font-black  uppercase text-lg lg:mb-4 text-center flex items-center justify-center tracking-[-0.3rem] [word-spacing: -0.5rem]`;
function ContactUs() {
  return (
    <Container>
      <Title className="contact-us-title">Contact us</Title>
      <BsFillHandIndexFill />
    </Container>
  );
}

export default ContactUs;
