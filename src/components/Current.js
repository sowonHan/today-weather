import React from "react";
import { WiDaySunny } from "react-icons/wi";
import styled from "styled-components";

const AllContainer = styled.div`
  width: 825px;
  height: 235px;
  margin: 35px auto 15px;

  & p {
    font-size: 1.3rem;
    padding: 0;
    margin: 0;
  }

  & > h3 {
    font-family: "Jua", sans-serif;
    font-size: 1.5rem;
    margin: 0;
    padding: 0;
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
  /* color: orange; */
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

  & > p:first-of-type {
    font-size: 2rem;
    margin-right: 30px;
  }
`;

const SecondRow = styled.div`
  display: flex;

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
    margin-left: 314px;
  }
`;

const Today = () => {
  return (
    <AllContainer>
      <Time>5월 19일 05:31 pm</Time>
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

const SubCon = styled.div`
  width: 610px;
  height: 200px;

  & p {
    font-size: 1.3rem;
    padding: 0;
    margin: 0;
  }
`;

const LowAndHigh = styled.div`
  width: 610px;
  height: 90px;
  display: flex;
  align-items: center;
`;

const YesterIcon = styled(WiDaySunny)`
  flex: 1;
  height: 60px;
`;

const DataZone = styled.div`
  flex: 4;
`;

const Data2Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Yesterday = () => {
  return (
    <AllContainer>
      <h3>어제 날씨는 어땠지?</h3>
      <SubCon>
        <LowAndHigh>
          <YesterIcon></YesterIcon>
          <DataZone>
            <p>최저온도 (오전 5시 기준)</p>
            <Data2Row>
              <p>19℃</p>
              <p>체감온도 19℃</p>
              <p>풍속 : 6.7m/s</p>
            </Data2Row>
          </DataZone>
        </LowAndHigh>
        <LowAndHigh>
          <YesterIcon />
          <DataZone>
            <p>최고온도 (오후 3시 기준)</p>
            <Data2Row>
              <p>19℃</p>
              <p>체감온도 19℃</p>
              <p>풍속 : 6.7m/s</p>
            </Data2Row>
          </DataZone>
        </LowAndHigh>
      </SubCon>
    </AllContainer>
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
