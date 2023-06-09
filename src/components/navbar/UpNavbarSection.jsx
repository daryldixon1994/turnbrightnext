import React from "react";
import tw from "twin.macro";
import Flag from "react-world-flags";
import { FaUserCircle } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
const Container = tw.div`box-border flex justify-end bg-[#001436] text-[#FECB36]`;
const Ul = tw.ul`box-border flex justify-evenly w-[60%]`;
const Li = tw.li`list-none font-semibold cursor-pointer flex items-center gap-[3px] uppercase hover:underline`;
const Login = tw.div``;
const FanClub = tw.div`box-border bg-[#FECB36] h-7 w-[180px] rounded-b-xl flex items-center justify-center gap-[10px] cursor-pointer`;
const Fan = tw.h5`text-[#001436] text-xl font-poppins font-black`;
const NavigationAndLogin = tw.div`flex justify-around w-[70%] p-2`;
function UpNavbarSection() {
  return (
    <Container>
      <FanClub>
        <Fan>Fan&apos;s Club</Fan>
        <IoIosArrowDown color="#001436" size={20} />
      </FanClub>
      <NavigationAndLogin>
        <Ul>
          <Li>Music</Li>
          <Li>Mobility</Li>
          <Li>Environment</Li>
          <Li>Women</Li>
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
      </NavigationAndLogin>
    </Container>
  );
}

export default UpNavbarSection;
