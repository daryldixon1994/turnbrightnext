import React from "react";
import tw from "twin.macro";
import Link from "next/link";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
const Container = tw.div`box-border w-[40%] h-[100vh] border-2 border-black`;
const Head = tw.div`box-border lg:mt-4`;
const Back = tw.span`font-bold text-lg`;
const Intro = tw.div`box-border w-[90%] mx-auto flex justify-center`;
const Title = tw.h1`font-poppins font-black text-5xl text-[#FECB36]`;
function Illustration() {
  return (
    <Container
      style={{
        backgroundImage: "url(/images/fan-member-ill.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Head>
        <Link href="/" style={{ display: "flex", alignItems: "end" }}>
          <MdOutlineKeyboardArrowLeft size={25} />
          <Back>Back</Back>
        </Link>
      </Head>
      <Intro>
        <Title>Turn B.Right</Title>
      </Intro>
    </Container>
  );
}

export default Illustration;
