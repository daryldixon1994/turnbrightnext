import React from "react";
import tw from "twin.macro";

const Container = tw.div`box-border `;
const Title = tw.h1`font-poppins text-[#001436] text-2xl  font-bold`;
const P = tw.p`font-poppins text-[#001436]`;
const Form = tw.form`py-4 `;
const Input = tw.input`block border-b-2 border-b-slate-300 focus:outline-none px-4 py-2 w-[50%] font-poppins `;
const Button = tw.button`lg:mt-8 box-border p-2 font-poppins transition ease-in-out bg-[#FECB36] text-[#001436] rounded active:bg-[rgb(0, 20, 54, 0.6)] hover:text-[#FECB36] hover:-translate-y-1 hover:scale-105 hover:bg-[#001436] duration-300`;
function LeaveComment() {
  return (
    <Container>
      <Title>Leave a comment</Title>
      <P>
        We maintain strict privacy standards and your email address will not be
        published.
      </P>
      <Form>
        <Input placeholder="Name" />
        <Input placeholder="Email Adress" />
        <Input placeholder="Write your comment here" />
        <Button type="button">Submit</Button>
      </Form>
    </Container>
  );
}

export default LeaveComment;
