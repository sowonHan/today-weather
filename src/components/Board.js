import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Tab from "./Tab";
// import Current from "./Current";
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
  let unix = Math.round(+yesterday / 1000);

  console.log("어제 :", unix);

  const getgeo = async () => {
    try {
      const geoResponse = await axios.get(cityGeo);
      console.log("위치 :", geoResponse.data.coord.lon);

      const onecallUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${geoResponse.data.coord.lat}&lon=${geoResponse.data.coord.lon}8&appid=18bcd66d8c2f78ea7c4d91ad9ee784bc&exclude=minutely,alerts&units=metric&lang=kr`;

      const onecall = await axios.get(onecallUrl);
      console.log("원콜", onecall);

      const yesterdayUrl = `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${geoResponse.data.coord.lat}&lon=${geoResponse.data.coord.lon}&dt=${unix}&appid=18bcd66d8c2f78ea7c4d91ad9ee784bc&only_current={true}&units=metric&lang=kr`;

      const yestercall = await axios.get(yesterdayUrl);
      console.log("어제날씨 :", yestercall);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <WhiteBoard>
      <City>서울</City>
      <Tab />
      <DataContainer>
        <div getgeo={getgeo()}></div>
      </DataContainer>
    </WhiteBoard>
  );
};

export default Board;
