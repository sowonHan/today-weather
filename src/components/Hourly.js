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

  & > p {
    font-size: 1.2rem;
    text-align: center;
  }
`;

const Hide = styled.div`
    width: ${props => props.isOpen ? "330px" : 0};
    height: 510px;
    overflow: hidden;
    transition-property: width;
    transition-duration: 1s;
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
  padding: 5px;

  & > p {
    font-size: 1.2rem;
    
  }
`;

const Hourly = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => {
    setIsOpen(prev => !prev)
  } 

  return (
    <AllContainer>
      <Show onClick={togglePanel}>
        <ShowBar />
        <ShowContent>
          <p>10:00</p>
          <div>
            <WiDaySunny></WiDaySunny>
          </div>
          <p>19℃</p>
          <p>2.2m/s</p>
          <p>0%</p>
          <p>0.0mm</p>
        </ShowContent>
      </Show>
      <Hide isOpen={isOpen}>
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
