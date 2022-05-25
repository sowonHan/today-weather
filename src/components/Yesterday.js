import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { WiDaySunny } from "react-icons/wi";

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

const SubCon = styled.div`
  width: 610px;
  height: 170px;
  margin: 3px 0 0 20px;

  & p {
    font-size: 1.25rem;
  }
`;

const LowAndHigh = styled.div`
  width: 610px;
  height: 90px;
  display: flex;
  align-items: center;
`;

const YesterIcon = styled(WiDaySunny)`
  display: block;
  flex: 1;
  height: 60px;
`;

const DataZone = styled.div`
  flex: 4;

  & > p {
    font-weight: 600;

    & > span {
      font-size: 1rem;
      font-weight: 400;
      margin-left: 5px;
    }
  }
`;

const Data2Row = styled.div`
  margin-top: 13px;
  display: flex;
  justify-content: space-between;
`;

const Yesterday = () => {
  return (
    <AllContainer>
      <h3>어제 날씨는 어땠지?</h3>
      <SubCon>
        <LowAndHigh>
          <YesterIcon />
          <DataZone>
            <p>
              최저온도
              <span>(오전 5시 기준)</span>
            </p>
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
            <p>
              최고온도
              <span>(오후 3시 기준)</span>
            </p>
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

export default Yesterday;
