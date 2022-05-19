import React from "react";
import { WiDaySunny } from "react-icons/wi";
import styled from "styled-components";

const TodayContainer = styled.div`
  width: 825px;
  height: 235px;
  margin: 25px auto 20px;
`;

const Time = styled.div`
  font-size: 1.15rem;
  font-weight: 700;
`;

const TodayTop = styled.div`
  display: flex;
  margin: 10px 0;

  & div {
    font-size: 1.3rem;
  }
`;

const TodayIcon = styled(WiDaySunny)`
  /* color: orange; */
  /* width: 120px; */
  flex: 1;
  height: 120px;
`;

const IconNext = styled.div`
  flex: 4;
`;

const FirstRow = styled.div`
  display: flex;
  margin-bottom: 20px;
  align-items: center;

  & > div:first-of-type {
    font-size: 2rem;
    margin-right: 30px;
  }
`;

const SecondRow = styled.div`
  display: flex;

  & > div {
    flex: 1;
  }
`;

const TodayBottom = styled.div`
  display: flex;
  margin: 10px 0;

  & > div {
    font-size: 1.3rem;
  }

  & > div:first-of-type {
    margin-left: 70px;
    margin-right: 55px;
  }

  & > div:last-of-type {
    margin-left: 315px;
  }
`;

const Today = () => {
  return (
    <TodayContainer>
      <Time>5월 19일 05:31 pm</Time>
      <TodayTop>
        <TodayIcon />
        <IconNext>
          <FirstRow>
            <div>19℃</div>
            <div>체감온도 19℃</div>
          </FirstRow>
          <SecondRow>
            <div>풍속 : 6.7m/s</div>
            <div>습도 : 45%</div>
            <div>강우량 : 0.0mm</div>
          </SecondRow>
        </IconNext>
      </TodayTop>
      <TodayBottom>
        <div>맑음</div>
        <div>자외선 지수 : 1</div>
        <div>적설량 : 0.0mm</div>
      </TodayBottom>
    </TodayContainer>
  );
};

const YesterdayContainer = styled.div`
  width: 825px;
  height: 250px;
  margin: 20px auto;

  & > h3 {
    font-family: "Jua", sans-serif;
    font-size: 1.5rem;
  }
`;

const YDataCon = styled.div`
  width: 610px;
  height: 200px;
`;

const Yesterday = () => {
  return (
    <YesterdayContainer>
      <h3>어제 날씨는 어땠지?</h3>
      <YDataCon>
        <div className="low_con">
          <WiDaySunny />
          <div className="text_con">
            <div>최저온도 (오전 5시 기준)</div>
            <div className="text_2row">
              <div>19℃</div>
              <div>체감온도 19℃</div>
              <div>풍속 : 6.7m/s</div>
            </div>
          </div>
        </div>
        <div className="high_con">
          <WiDaySunny />
          <div className="text_con">
            <div>최고온도 (오후 3시 기준)</div>
            <div className="text_2row">
              <div>19℃</div>
              <div>체감온도 19℃</div>
              <div>풍속 : 6.7m/s</div>
            </div>
          </div>
        </div>
      </YDataCon>
    </YesterdayContainer>
  );
};

const Current = () => {
  return (
    <>
      <Today />
      <hr />
      <Yesterday />
    </>
  );
};

export default Current;
