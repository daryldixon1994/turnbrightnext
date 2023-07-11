import React from "react";
import Illustration from "@/components/fanMember/Illustration";
import RegisterForm from "@/components/fanMember/RegisterForm";
import tw from "twin.macro";

const Container = tw.div`box-border flex`;

function FanMmeberRegister() {
  return (
    <Container>
      <Illustration />
      <RegisterForm />
    </Container>
  );
}

export default FanMmeberRegister;
