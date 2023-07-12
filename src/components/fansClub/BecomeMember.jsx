import Link from "next/link";
import React from "react";
import tw from "twin.macro";

const Container = tw.div`box-border bg-gradient-to-b from-[rgb(254, 203, 54,0)] to-[rgb(254, 203, 54, 0.5)] p-10`;
const SubContainer = tw.div`box-border bg-[#FECB36] py-4 px-8`;
const H1 = tw.h1`font-poppins font-bold uppercase text-3xl text-[#001436]`;
const Box = tw.div`box-border flex items-start justify-between`;
const P = tw.p`font-poppins font-medium uppercase text-base text-[#001436] lg:w-[80%]`;
const BecomeMemberBtn = tw.span`bg-[#001436] font-poppins text-[#FECB36] py-1 px-3 font-semibold uppercase`;
function BecomeMember() {
  return (
    <Container>
      <SubContainer>
        <H1>Would you like to become a member</H1>
        <Box>
          <P>
            &quot;Be a valued member and amplify your voice! Join us at Turn B
            Right to share your opinions, ideas, vision, and unique perspective.
            Together, let&apos;s enjoy shaping a better future.&quot;
          </P>
          <Link href="/fan-member/register">
            <BecomeMemberBtn>Become a member</BecomeMemberBtn>
          </Link>
        </Box>
      </SubContainer>
    </Container>
  );
}

export default BecomeMember;
