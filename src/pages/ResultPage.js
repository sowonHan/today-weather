import React, { useState } from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import Tab from "../components/Tab";
import sunny from "./../images/sunny.jpg";
import night from './../images/night.jpg';

const time = new Date().getHours();
const timeImage = () => {
  if (time <= 18) {
    return sunny;
  } else {
    return night;
  }
};

const WallPaper = styled.div`
  max-width: 2560px;
  height: 100vh;
  max-height: 1600px;
  background-image: url(${(props) => props.timeImage});
  background-size: cover;
  background-position: center;
  position: relative;
`;

const Margin1 = styled.div`
  margin-bottom: 20px;
`;

const Margin2 = styled.div`
  margin-bottom: 25px;
`;

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
  margin: 10px auto;
`;

const ResultPage = () => {
  const [parents, setParents] = useState("seoul");

  return (
    <WallPaper timeImage={timeImage}>
      <Header />
      <Margin1 />
      <SearchBar />
      <Margin2 />
      <WhiteBoard>
        <City>{parents}</City>
        <Tab />
        <DataContainer>
          <Outlet context={[parents, setParents]} />
        </DataContainer>
      </WhiteBoard>
      <Footer />
    </WallPaper>
  );
};

export default ResultPage;
