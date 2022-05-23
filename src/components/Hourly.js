import React, { useState, useCallback } from "react";
import { WiDaySunny } from "react-icons/wi";
import styled from "styled-components";

const AllContainer = styled.div`
  width: 1210px;
  height: 530px;
  display: flex;
  margin-top: 30px;
  background-color: white;
  overflow: scroll;
`;

const Show = styled.div`
  width: 110px;
  height: 500px;

  &:hover {
    .hover {
      background-color: #f35b5b;
      transition: background-color 0.5s;
    }
  }
`;

const ShowBar = styled.div`
  width: 110px;
  height: 5px;
  margin-bottom: 5px;
  background-color: white;
  transition: background-color 0.5s;
`;

const ShowContent = styled.div`
  width: 110px;
  height: 480px;

  & > p {
    font-size: 1.2rem;
    text-align: center;
  }

  & > p:first-of-type {
    margin-top: 10px;
    font-weight: 600;
  }

  & > p:not(:first-of-type, :last-of-type) {
    margin-bottom: 20px;
  }
`;

const IconContainer = styled.div`
  width: 100px;
  height: 285px;
  margin: 15px auto;
`;

const Icon = styled.div`
  width: 50px;
  height: 50px;
  margin: 0 auto;
`;

const Sample = styled(WiDaySunny)`
  width: 50px;
  height: 50px;
`;

const Hide = styled.div`
  width: ${(props) => (props.isOpen ? "220px" : 0)};
  height: 510px;
  overflow: hidden;
  transition-property: width;
  transition-duration: 0.5s;
`;

const HideBar = styled.div`
  width: 220px;
  height: 5px;
  background-color: #f35b5b;
  margin-bottom: 5px;
`;

const HideContent = styled.div`
  width: 220px;
  height: 500px;
  padding: 10px;

  & > p {
    font-size: 1.25rem;
    margin-bottom: 15px;
  }

  & > p:first-of-type {
    margin: 5px 0 40px;
    font-weight: 600;
  }

  & > p:nth-of-type(2),
  p:nth-of-type(3) {
    margin-bottom: 40px;
  }

  & > p:last-of-type {
    margin-top: 40px;
  }
`;

const Hourly = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <AllContainer>
      <Show onClick={togglePanel}>
        <ShowBar className="hover" />
        <ShowContent>
          <p>10:00</p>
          <IconContainer>
            <Icon>
              <Sample />
            </Icon>
          </IconContainer>
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
