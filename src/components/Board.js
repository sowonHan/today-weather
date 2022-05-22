import React from "react";
import styled from "styled-components";
import Tab from "./Tab";
// import Current from "./Current";
import Hourly from "./Hourly";

const WhiteBoard = styled.div`
  background-color: rgb(255, 255, 255, 0.9);
  width: 1260px;
  height: 700px;
  margin: 0 auto;
`;

const City = styled.h1`
  font-family: "Jua", sans-serif;
  font-size: 2.5rem;
  margin-left: 20px;
  padding-top: 10px;
  height: 55px;
`;

const DataContainer = styled.div`
  width: 1195px;
  height: 600px;
  margin: 10px auto;
`;

const Board = () => {
  return (
    <WhiteBoard>
      <City>서울</City>
      <Tab />
      <DataContainer>
        <Hourly />
      </DataContainer>
    </WhiteBoard>
  );
};

export default Board;
