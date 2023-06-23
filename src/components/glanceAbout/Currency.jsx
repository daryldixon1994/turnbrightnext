"use client";
import React, { useEffect, useState } from "react";
import tw from "twin.macro";
import ReactLoading from "react-loading";

const Container = tw.div`box-border grow border-l-2 border-l-[rgb(3, 20, 0,0.7)] px-2`;
const H1 = tw.h1`font-poppins text-[#001436] text-xl font-bold`;
const Content = tw.div``;
const P = tw.p`font-poppins text-[#001436] text-lg font-medium`;
function Currency() {
  const [dataCurr, setDataCurr] = useState(null);
  // console.log("dataCurr", dataCurr);
  useEffect(() => {
    fetch(
      "https://api.currencyapi.com/v3/latest?apikey=WE4LAqoSsqb6mWHMYdz5lJSgA1PfVx2hVJFY15rI&currencies=EUR%2CUSD&base_currency=CHF"
    )
      .then((res) => res.json())
      .then((res) => setDataCurr(res));
  }, []);

  return (
    <Container>
      <H1>Currency</H1>
      <Content>
        <P>Swiss Franc : 1 CHF</P>
        <>
          US Dollar :{" "}
          {dataCurr ? (
            <P>{Number.parseFloat(dataCurr.data.USD.value).toFixed(2)} $</P>
          ) : (
            <ReactLoading
              type="bars"
              color="#001436"
              height={"15%"}
              width={"20%"}
            />
          )}
        </>
      </Content>
    </Container>
  );
}

export default Currency;
