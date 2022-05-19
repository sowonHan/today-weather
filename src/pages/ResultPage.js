import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import Board from "../components/Board";
import styled from "styled-components";

const WallPaper = styled.div`
  max-width: 2400px;
  height: 100vh;
  max-height: 1600px;
  background-image: url("/images/sunny.jpg");
  background-size: cover;
  background-position: center;
  position: relative;
`;

const Margin = styled.div`
  margin-bottom: 30px;
`;

const ResultPage = () => {
  return (
    <WallPaper>
      <Header />
      <Margin />
      <SearchBar />
      <Margin />
      <Board></Board>
      <Footer />
    </WallPaper>
  );
};

export default ResultPage;
