import React from "react";
import tw from "twin.macro";
import { BsFacebook, BsLinkedin, BsYoutube } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
const Socialmedia = tw.div`box-border flex items-center gap-[10px]`;
function SocialMedia({ colorIcon }) {
  return (
    <Socialmedia>
      <BsFacebook size={20} color={colorIcon} />
      <BsLinkedin size={20} color={colorIcon} />
      <AiFillTwitterCircle size={25} color={colorIcon} />
      <AiFillInstagram size={25} color={colorIcon} />
      <FaTiktok size={22} color={colorIcon} />
      <BsYoutube size={23} color={colorIcon} />
    </Socialmedia>
  );
}

export default SocialMedia;
