import React from "react";
import Image from "next/image";
import tw from "twin.macro";
import Logo from "../../assets/images/logo.svg";
import Link from "next/link";
const Container = tw.div`box-border bg-white`;
const ImageBox = tw.div`box-border flex justify-center`;
const Ul = tw.ul`flex justify-center gap-[50px] p-2`;
const Li = tw.li`uppercase font-bold cursor-pointer text-[#001436] hover:underline hover:cursor-pointer`;
// const Image = tw.img`w-[150px]`;
// Image.defaultProps = {
//   src: Logo,
// };
function DownNavBarSection({ offset }) {
  return (
    <Container
      style={
        offset > 0
          ? { display: "flex", justifyContent: "center", alignItems: "center" }
          : { display: "block" }
      }
    >
      <ImageBox>
        {/* <Image alt=""/> */}
        <Image src={Logo} alt="" width={offset > 0 ? 85 : 150} />
      </ImageBox>
      <Ul>
        <Link href="/">
          <Li>News</Li>
        </Link>
        <Li>Events</Li>
        <Li>Articles</Li>
        <Li>Videos</Li>
      </Ul>
    </Container>
  );
}

export default DownNavBarSection;
