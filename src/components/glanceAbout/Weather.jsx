import React, { useEffect, useState } from "react";
import tw from "twin.macro";
import ReactLoading from "react-loading";

const Container = tw.div`box-border grow px-2`;
const H1 = tw.h1`font-poppins text-[#001436] text-xl font-bold`;
const H2 = tw.h1`font-poppins text-[#001436] text-lg font-medium`;
const P = tw.span`font-poppins font-normal text-base`;
const Temp = tw.h3`font-poppins text-lg font-medium`;
const Content = tw.div`flex items-center`;
function Weather() {
  const [data, setData] = useState();
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Zurich&units=metric&appid=751730611ff62810179139c9244bc34c`
    )
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.error(err));
  }, [data]);

  return (
    <Container>
      <H1>
        Weather <P>today</P>
      </H1>
      {data ? (
        <Content>
          <H2>{data.name}</H2>
          {/* {data.weather[data.weather.length - 1].main} */}
          <img
            src={`http://openweathermap.org/img/wn/${
              data.weather[data.weather.length - 1].icon
            }@2x.png`}
            width="50px"
            alt=""
            style={{ margin: 0 }}
          />
          <Temp>{Math.round(data.main.temp)} °c</Temp>
        </Content>
      ) : (
        <ReactLoading
          type="bars"
          color="#001436"
          height={"15%"}
          width={"20%"}
        />
      )}
      {/* <ReactLoading type="bars" color="#001436" height={"20%"} width={"20%"} /> */}
    </Container>
  );
}

export default Weather;
