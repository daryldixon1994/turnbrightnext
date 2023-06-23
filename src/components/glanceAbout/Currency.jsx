import React, { useEffect, useState } from "react";
import tw from "twin.macro";

const Container = tw.div`box-border grow border-l-2 border-l-[rgb(3, 20, 0,0.7)] px-2`;
const H1 = tw.h1`font-poppins text-[#001436] text-xl font-bold`;
const Content = tw.div``;
const P = tw.p`font-poppins text-[#001436] text-lg font-medium`;
function Currency() {
  const [dataCurr, setDataCurr] = useState();
  useEffect(() => {
    fetch(
      "https://api.currencyapi.com/v3/latest?apikey=WE4LAqoSsqb6mWHMYdz5lJSgA1PfVx2hVJFY15rI&currencies=EUR%2CUSD&base_currency=CHF"
    )
      .then((res) => res.json())
      .then((res) => setDataCurr(res))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Container>
      <H1>Currency</H1>
      <Content>
        <P>Swiss Franc : 1 CHF</P>
        <P>
          US Dollar :{" "}
          {dataCurr && Number.parseFloat(dataCurr.data.USD.value).toFixed(2)} $
        </P>
      </Content>
    </Container>
  );
}

export default Currency;
