import React from "react";
import tw from "twin.macro";
import { Form, Input, TextArea, Select } from "semantic-ui-react";
const Container = tw.div`box-border lg:mt-16 `;
const Intro = tw.div`box-border flex items-center justify-center gap-4 mx-auto`;
const Line = tw.div`box-border bg-[#001436] w-[50%] h-[2px]`;
const Or = tw.h5`font-bold font-poppins text-2xl`;
const Btn = tw.button`box-border bg-gradient-to-r from-[#FECB36] to-[rgb(247, 167, 113, 0.5)] w-[100%] p-2 rounded-xl lg:mt-12 text-[#001436] font-poppins font-bold text-xl`;
function MmeberForm() {
  return (
    <Container>
      <Intro>
        <Line />
        <Or>Or</Or>
        <Line />
      </Intro>
      <Form size="large">
        <Form.Field
          id="form-input-control-first-name"
          control={Input}
          label="Full name"
          placeholder="Full name"
        />
        <Form.Field
          id="form-input-control-error-email"
          control={Input}
          label="Email"
          placeholder="joe@schmoe.com"
          // error={{
          //   content: "Please enter a valid email address",
          //   pointing: "below",
          // }}
          required
        />
        <Form.Field
          id="form-input-control-first-name"
          control={Input}
          label="Phone Number"
          placeholder="Phone Number"
        />
        <Form.Field
          id="form-textarea-control-opinion"
          control={TextArea}
          label="Description"
          placeholder="Description"
          required
        />
      </Form>
      <Btn id="click-btn">Send</Btn>
    </Container>
  );
}

export default MmeberForm;
