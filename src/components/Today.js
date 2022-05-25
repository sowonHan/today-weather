import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { WiDaySunny } from "react-icons/wi";
import axios from "axios";

const dateBuilder = (d) => {
  let days = ["일", "월", "화", "수", "목", "금", "토"];

  let year = d.getFullYear();
  let month = d.getMonth() + 1;
  let date = d.getDate();
  let day = days[d.getDay()];
  let hour = d.getHours();
  let minute = d.getMinutes();
  // 디지털 시간 표기 let time = d.toTimeString().substring(0, 5);

  return `${year}년 ${month}월 ${date}일 ${day}요일 ${hour}시 ${minute}분`;
};

const AllContainer = styled.div`
  width: 825px;
  height: 200px;
  margin: 47px auto 40px;

  & p {
    font-size: 1.3rem;
  }

  & > h3 {
    font-family: "Jua", sans-serif;
    font-size: 1.5rem;
  }
`;

const Time = styled.p`
  font-size: 1.15rem;
  font-weight: 700;
`;

const TodayTop = styled.div`
  display: flex;
  margin: 10px 0;
  align-items: center;
`;

const TodayIcon = styled(WiDaySunny)`
  flex: 1;
  height: 120px;
  display: block;
  /* margin: 0 20px 0 24px; */
`;

const IconNext = styled.div`
  flex: 4;
`;

const FirstRow = styled.div`
  display: flex;
  margin-bottom: 20px;
  align-items: center;

  & > p:first-of-type {
    font-size: 2rem;
    margin-right: 30px;
  }
`;

const SecondRow = styled.div`
  display: flex;
  padding-top: 5px;

  & > p {
    flex: 1;
  }
`;

const TodayBottom = styled.div`
  display: flex;
  margin: 10px 0;

  & > p:first-of-type {
    margin-left: 65px;
    margin-right: 61px;
  }

  & > p:last-of-type {
    margin-left: 284px;
  }
`;

const Today = ({ latlon }) => {
  const { lat, lon } = latlon;

  const onecallUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}8&appid=18bcd66d8c2f78ea7c4d91ad9ee784bc&exclude=minutely,alerts&units=metric&lang=kr`;

  const [today, setToday] = useState("");

  useEffect(() => {
    const getToday = async () => {
      try {
        const onecall = axios.get(onecallUrl).then((rdata) => {
          console.log("원콜", rdata);
          // setToday({

          // });
        });
      } catch (error) {
        console.log("error :", error);
      }
    };
    getToday();
  }, [latlon]);

  return (
    <AllContainer>
      <Time>{dateBuilder(new Date())}</Time>
      <TodayTop>
        <TodayIcon></TodayIcon>
        <IconNext>
          <FirstRow>
            <p>19℃</p>
            <p>체감온도 19℃</p>
          </FirstRow>
          <SecondRow>
            <p>풍속 : 6.7m/s</p>
            <p>습도 : 45%</p>
            <p>강우량 : 0.0mm</p>
          </SecondRow>
        </IconNext>
      </TodayTop>
      <TodayBottom>
        <p>맑음</p>
        <p>자외선 지수 : 1</p>
        <p>적설량 : 0.0mm</p>
      </TodayBottom>
    </AllContainer>
  );
};

export default Today;
