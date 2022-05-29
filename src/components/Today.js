import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import {
  WiDaySunny,
  WiDayCloudy,
  WiFog,
  WiSnowflakeCold,
  WiUmbrella,
  WiRainMix,
  WiThunderstorm,
  WiWindDeg,
} from "react-icons/wi";

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

const Loading = styled.div`
  width: 700px;
  height: 350px;
  text-align: center;
  line-height: 350px;
  font-size: 3rem;
  font-weight: 700;
`;

const AllContainer = styled.div`
  width: 700px;
  margin: 80px auto 0;

  & p {
    font-size: 1.3rem;
  }
`;

const Time = styled.p`
  font-size: 1.15rem;
  font-weight: 700;
  margin-left: 10px;
`;

const IconRow = styled.div`
  width: 800px;
  height: 120px;
  display: flex;
  align-items: center;
  margin: 30px 0 20px;
`;

const Icon = styled.div`
  flex: 1;
  margin-left: 40px;
`;

const IconNext = styled.div`
  flex: 4;
  margin-left: 20px;

  & > p {
    font-size: 2rem;
    font-weight: 500;
  }
`;

const Numbers = styled.div`
  width: 590px;
  margin: 0 auto;
`;

const FirstRow = styled.div`
  display: flex;
  width: 380px;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 40px;

  & > p:first-of-type {
    font-size: 2rem;
  }
`;

const SecondRow = styled.div`
  display: flex;
  width: 311px;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const ThirdRow = styled.div`
  display: flex;
  width: 355px;
  justify-content: space-between;
`;

const Today = () => {
  const [loading, setLoading] = useState(false);
  const [today, setToday] = useState("");

  useEffect(() => {
    const getToday = async () => {
      setLoading(true);
      try {
        const current = await axios
          .get(
            "https://api.openweathermap.org/data/2.5/weather?q=seoul&appid=18bcd66d8c2f78ea7c4d91ad9ee784bc&units=metric&lang=kr"
          )
          .then((response) => {
            const data = response.data;
            // data.name으로 도시명이 나오기는 하는데 일단 보류

            setToday({
              temp: data.main.temp,
              feels_like: data.main.feels_like,
              humidity: data.main.humidity,
              id: data.weather[0].id,
              description: data.weather[0].description,
              wind: data.wind.speed,
              rain: data.hasOwnProperty("rain") ? data.rain["1h"] : "0.0",
              snow: data.hasOwnProperty("snow") ? data.snow["1h"] : "0.0",
            });
          });
      } catch (error) {
        console.log("에러 :", error);
      }
      setLoading(false);
    };
    getToday();
  }, []);

  const selectIcon = () => {
    let iconId = today.id === 800 ? 0 : (today.id / 100).toFixed(0);

    switch (iconId) {
      case 0:
        return <WiDaySunny size="7rem" color="#ff9100" />;
      case "2":
        return <WiThunderstorm size="7rem" color="#682cbf" />;
      case "3":
        return <WiRainMix size="7rem" color="#77d195" />;
      case "5":
        return <WiUmbrella size="7rem" color="#526eff" />;
      case "6":
        return <WiSnowflakeCold size="7rem" color="#c4f5ff" />;
      case "7":
        return <WiFog size="7rem" color="#7c5547" />;
      case "8":
        return <WiDayCloudy size="7rem" color="#5f7d8e" />;
      default:
        return <WiWindDeg size="7rem" />;
    }
  };

  if (loading) {
    return <Loading>일기예보 불러오는 중...</Loading>;
  }

  return (
    <AllContainer>
      <Time>{dateBuilder(new Date())}</Time>
      <IconRow>
        <Icon>{selectIcon()}</Icon>
        <IconNext>
          <p>{today.description}</p>
        </IconNext>
      </IconRow>
      <Numbers>
        <FirstRow>
          <p>{today.temp}℃</p>
          <p>체감온도 : {today.feels_like}℃</p>
        </FirstRow>
        <SecondRow>
          <p>풍속 : {today.wind}m/s</p>
          <p>습도 : {today.humidity}%</p>
        </SecondRow>
        <ThirdRow>
          <p>강우량 : {today.rain}mm</p>
          <p>적설량 : {today.snow}mm</p>
        </ThirdRow>
      </Numbers>
    </AllContainer>
  );
};

export default Today;
