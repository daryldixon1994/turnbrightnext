import React from "react";
import tw from "twin.macro";
import Flag from "react-world-flags";
// import { FaUserCircle } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
const Container = tw.div`box-border flex justify-center bg-[#001436] text-[#FECB36] relative`;
const Ul = tw.ul`box-border flex justify-evenly w-[70%]`;
const Li = tw.li`list-none font-semibold flex items-center gap-[3px] uppercase`;
const Login = tw.div`border-2 border-[#FECB36] rounded-full w-6 h-6 flex justify-center items-center`;
const FanClub = tw.div`box-border bg-[#FECB36] h-7 w-[180px] rounded-b-xl `;
const Fan = tw.h5`text-[#001436] text-xl font-poppins font-black`;
const FanHead = tw.div`flex items-center justify-center gap-[10px] cursor-pointer`;
const NavigationAndLogin = tw.div`flex justify-around w-[70%] p-2 `;
const FanDropDown = tw.div`bg-[rgb(254, 203, 54, 0.6)] absolute top-[75%] w-[180px] min-h-[50px]`;
const Ul2 = tw.ul`lg:py-2`;
const Li2 = tw.li`lg:px-3 py-1 list-none text-[#001436] font-medium font-poppins hover:bg-[#001436] hover:text-[#FECB36]`;
function UpNavbarSection() {
  const mediaImgs = [
    { name: "Yonis", pic: "/images/fan-img1.png" },
    { name: "Sarra", pic: "/images/fan-img2.png" },
    { name: "Richard", pic: "/images/fan-img3.png" },
    { name: "Fred", pic: "/images/fan-img4.png" },
    { name: "Elodie", pic: "/images/fan-img5.png" },
  ];
  return (
    <Container>
      <FanClub className="fan-head">
        <FanHead>
          <Fan>Fan&apos;s Club</Fan>
          <IoIosArrowDown color="#001436" size={20} />
        </FanHead>
        <FanDropDown className="fan-club-drop">
          <Ul2>
            <Li2>
              <a href="https://dynaskills-dynajobs.com/" target="_blank">
                dynaskills®
              </a>
            </Li2>
            {mediaImgs.map((elt, i) => (
              <Li2 key={i}> {elt.name} </Li2>
            ))}
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
          <Li>About Turn B.Right</Li>
          <Li>
            <Flag code="ch" width={15} />
            Swiss
          </Li>
        </Ul>
        <Login>
          <IoIosArrowDown color="#FECB36" size={20} />
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
