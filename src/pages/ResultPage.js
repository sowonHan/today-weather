import React from "react";
// import { Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import Board from "../components/Board";
import styled from "styled-components";
// import Today from '../components/Today';
// import Hourly from "../components/Hourly";

const WallPaper = styled.div`
  max-width: 2400px;
  height: 100vh;
  max-height: 1600px;
  background-image: url("/images/sunny.jpg");
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

const ResultPage = () => {
  return (
    <WallPaper>
      <Header />
      <Margin1 />
      <SearchBar />
      <Margin2 />
      <Board></Board>
      <Footer />
    </WallPaper>
  );
};

export default ResultPage;
