import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Tab from "./Tab";
import Current from "./Current";
// import useAxios from "axios-hooks";
// import Hourly from "./Hourly";
// import Daily from "./Daily";

const WhiteBoard = styled.div`
  background-color: rgb(255, 255, 255, 0.9);
  width: 1260px;
  height: 700px;
  margin: 0 auto;
`;

const City = styled.h1`
  font-family: "Jua", sans-serif;
  font-size: 2.5rem;
  margin-left: 20px;
  padding-top: 10px;
  height: 55px;
`;

const DataContainer = styled.div`
  width: 1195px;
  height: 600px;
  margin: 10px auto;
`;

const Board = () => {
  const cityGeo = `https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=18bcd66d8c2f78ea7c4d91ad9ee784bc&units=metric`;

  let today = new Date();
  let yesterday = new Date(today.setDate(today.getDate() - 1));
  let low = new Date(yesterday.setHours(5, 0, 0, 0));
  let high = new Date(yesterday.setHours(15, 0, 0, 0));
  let unixlow = Math.round(+low / 1000);
  let unixhigh = Math.round(+high / 1000);
  // 참고!! 현재 시간에다 날짜만 어제자로 하고 싶으면 let now = Date.now(yesterday); 이렇게 간단하게 할 수 있음

  const [latlon, setLatLon] = useState({ lat: "", lon: "" });

  // const [{ data, loading, error }, refetch] = useAxios(cityGeo);

  useEffect(() => {
    const getlocation = async () => {
      try {
        const geoResponse = await axios.get(cityGeo).then((res) => {
          const latlon = {
            lat: res.data.coord.lat,
            lon: res.data.coord.lon,
          };

          setLatLon(latlon);
        });

        // const onecallUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${geoResponse.data.coord.lat}&lon=${geoResponse.data.coord.lon}8&appid=18bcd66d8c2f78ea7c4d91ad9ee784bc&exclude=minutely,alerts&units=metric&lang=kr`;

        // const onecall = await axios.get(onecallUrl).then((res) => {
        //   console.log("원콜 :", res);
        //   setCurrent(res.data.current);
        // });

        // const yesLowUrl = `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${geoResponse.data.coord.lat}&lon=${geoResponse.data.coord.lon}&dt=${unixlow}&appid=18bcd66d8c2f78ea7c4d91ad9ee784bc&only_current={true}&units=metric&lang=kr`;

        // const lowcall = await axios.get(yesLowUrl);

        // const yesHighUrl = `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${geoResponse.data.coord.lat}&lon=${geoResponse.data.coord.lon}&dt=${unixhigh}&appid=18bcd66d8c2f78ea7c4d91ad9ee784bc&only_current={true}&units=metric&lang=kr`;

        // const highcall = await axios.get(yesHighUrl);
      } catch (error) {
        console.log("error :", error);
      }
    };
    getlocation();
  }, []);

  return (
    <WhiteBoard>
      <City>서울</City>
      <Tab />
      <DataContainer>
        <Current latlon={latlon} />
      </DataContainer>
    </WhiteBoard>
  );
};

export default Board;
