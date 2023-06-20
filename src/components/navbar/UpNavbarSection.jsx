import React from "react";
import tw from "twin.macro";
import Flag from "react-world-flags";
import { FaUserCircle } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
const Container = tw.div`box-border flex justify-end bg-[#001436] text-[#FECB36] relative`;
const Ul = tw.ul`box-border flex justify-evenly w-[60%]`;
const Li = tw.li`list-none font-semibold flex items-center gap-[3px] uppercase`;
const Login = tw.div``;
const FanClub = tw.div`box-border bg-[#FECB36] h-7 w-[180px] rounded-b-xl `;
const Fan = tw.h5`text-[#001436] text-xl font-poppins font-black`;
const FanHead = tw.div`flex items-center justify-center gap-[10px] cursor-pointer`;
const NavigationAndLogin = tw.div`flex justify-around w-[70%] p-2`;
const FanDropDown = tw.div`bg-[rgb(254, 203, 54, 0.6)] absolute top-[75%] w-[180px] min-h-[50px]`;
const Ul2 = tw.ul`lg:px-3 py-2`;
const Li2 = tw.li`list-none	text-[#001436] font-medium font-poppins lg:mb-1.5 
`;
function UpNavbarSection() {
  return (
    <Container>
      <FanClub className="fan-head">
        <FanHead>
          <Fan>Fan&apos;s Club</Fan>
          <IoIosArrowDown color="#001436" size={20} />
        </FanHead>
        <FanDropDown className="fan-club-drop">
          <Ul2>
            <Li2>dynaskills® </Li2>
            {/* <Li2>Angestellte Shweiz</Li2>
            <Li2>Swiss Supply</Li2> */}
          </Ul2>
        </FanDropDown>
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
          {/* <Li>
            <FaUserCircle size={18} />
            Login
          </Li> */}
        </Login>
      </NavigationAndLogin>
    </Container>
  );
}

export default UpNavbarSection;
