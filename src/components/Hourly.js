import React, { useState } from "react";
import { WiDaySunny } from "react-icons/wi";
import styled from "styled-components";

const AllContainer = styled.div`
  width: 1210px;
  height: 510px;
  display: flex;
  margin-top: 40px;
  background-color: white;
`;

const Show = styled.div`
  width: 110px;
  height: 510px;
`;

const ShowBar = styled.div`
  width: 110px;
  height: 5px;
  background-color: #f35b5b;
  margin-bottom: 5px;
`;

const ShowContent = styled.div`
  width: 110px;
  height: 500px;
`;

const HideBar = styled.div`
  width: 330px;
  height: 5px;
  background-color: #f35b5b;
  margin-bottom: 5px;
`;

const HideContent = styled.div`
  width: 330px;
  height: 500px;
`;

const Hourly = () => {
  const [isOpen, setIsOpen] = useState(false);

  const Hide = styled.div`
    width: 330px;
    height: ${isOpen ? "510px" : 0};
    overflow: hidden;
    /* height: 510px; */
    /* display: ${isOpen ? "block" : "none"}; */
    transition-duration: linear;
  `;

  return (
    <AllContainer>
      <Show onClick={() => setIsOpen((prev) => !prev)}>
        <ShowBar />
        <ShowContent>
          <p>10:00</p>
          <WiDaySunny></WiDaySunny>
          <p>19℃</p>
          <p>2.2m/s</p>
          <p>0%</p>
          <p>0.0mm</p>
        </ShowContent>
      </Show>
      <Hide>
        <HideBar />
        <HideContent>
          <p>맑음</p>
          <p>체감온도 19℃</p>
          <p>습도 : 45%</p>
          <p>강우량 : 0.0mm</p>
          <p>적설량 : 0.0mm</p>
          <p>자외선 지수 : 1</p>
        </HideContent>
      </Hide>
    </AllContainer>
  );
};

export default Hourly;
