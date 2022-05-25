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

const Loading = styled.div`
  width: 825px;
  height: 550px;
`;

const AllContainer = styled.div`
  width: 825px;
  height: 550px;
  margin: 50px auto 0;

  & p {
    font-size: 1.3rem;
  }
`;

const Time = styled.p`
  font-size: 1.15rem;
  font-weight: 700;
`;

const IconRow = styled.div`
  width: 800px;
  height: 120px;
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const Icon = styled(WiDaySunny)`
  flex: 1;
  height: 120px;
`;

const IconNext = styled.div`
  flex: 4;
  margin-left: 20px;

  & > p {
    font-size: 2rem;
  }
`;

const Today = () => {
  // const [loading, setLoading] = useState(false);

  // if (loading) {
  //   return <Loading>불러오는 중...</Loading>;
  // }

  return (
    <AllContainer>
      <Time>{dateBuilder(new Date())}</Time>
      <IconRow>
        <Icon></Icon>
        <IconNext>
          <p>맑음</p>
        </IconNext>
      </IconRow>
      <div>
        <div>
          <p>19℃</p>
          <p>체감온도 19℃</p>
        </div>
        <div>
          <p>풍속 : 6.7m/s</p>
          <p>습도 : 45%</p>
          <p>자외선 지수 : 1</p>
        </div>
        <div>
          <p>강우량 : 0.0mm</p>
          <p>적설량 : 0.0mm</p>
        </div>
      </div>
    </AllContainer>
  );
};

export default Today;
