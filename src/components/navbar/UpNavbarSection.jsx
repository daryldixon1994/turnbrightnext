import React from "react";
import tw from "twin.macro";
import Flag from "react-world-flags";
import { FaUserCircle } from "react-icons/fa";
const Container = tw.div`box-border flex justify-evenly bg-[#001436] text-[#FECB36] p-2`;
const Ul = tw.ul`box-border flex justify-evenly w-[55%]`;
const Li = tw.li`list-none font-semibold cursor-pointer flex items-center gap-[3px] uppercase`;
const Login = tw.div``;
function UpNavbarSection() {
  return (
    <Container>
      <Ul>
        <Li>Music</Li>
        <Li>Mobility</Li>
        <Li>Environment</Li>
        <Li>Policy</Li>
        <Li>Women</Li>
        <Li>Children</Li>
        <Li>Animals</Li>
        <Li>Jobs & Training</Li>
        <Li>
          <Flag code="ch" width={15} />
          Swiss
        </Li>
      </Ul>
      <Login>
        <Li>
          <FaUserCircle size={18} />
          Login
        </Li>
      </Login>
    </Container>
  );
}

export default UpNavbarSection;
