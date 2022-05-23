import React from "react";
import { WiDaySunny } from "react-icons/wi";
import styled from "styled-components";

const AllContainer = styled.div`
  width: 1050px;
  height: 510px;
  display: flex;
  margin: 40px auto 0;
  background-color: white;
  align-items: center;
`;

const Day = styled.div`
  width: 150px;
  height: 510px;
`;

const DayContent = styled.div`
  width: 150px;
  height: 500px;

  & > p {
    font-size: 1.2rem;
    text-align: center;
  }

  & > p:first-of-type {
    margin-top: 35px;
    font-weight: 600;
  }

  & > p:nth-of-type(2) {
    margin-bottom: 60px;
  }

  & > p:nth-of-type(3) {
    margin-bottom: 15px;
  }

  & > p:nth-of-type(5),
  p:last-of-type {
    margin-top: 50px;
  }
`;

const Icon = styled.div`
  width: 60px;
  height: 60px;
  margin: 40px auto 25px;
`;

const Sample = styled(WiDaySunny)`
  width: 60px;
  height: 60px;
`;

const Daily = () => {
  return (
    <AllContainer>
      <Day>
        <DayContent>
          <p>수</p>
          <Icon>
            <Sample />
          </Icon>
          <p>맑음</p>
          <p>15℃</p>
          <p>23℃</p>
          <p>0%</p>
          <p>0.0mm</p>
        </DayContent>
      </Day>
    </AllContainer>
  );
};

export default Daily;
