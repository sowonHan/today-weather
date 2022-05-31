import React from "react";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import SearchBar from "./../components/SearchBar";
import styled from "styled-components";
import main from './../images/main.jpg';


const Background = styled.div`
  max-width: 2400px;
  height: 100vh;
  max-height: 1600px;
  background-image: url(${main});
  background-size: cover;
  background-position: center;
  position: relative;
`;

const Margin = styled.div`
  margin-bottom: 110px;
`;

const Info = styled.div`
  width: 900px;
  height: 300px;
  border-radius: 20px;
  background-color: rgb(0, 0, 0, 0.5);
  margin: 100px auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-size: 1.8rem;
    color: white;
    font-weight: 500;
  }

  p:not(:last-of-type) {
    margin-bottom: 15px;
  }
`;

const MainPage = () => {
  return (
    <Background>
      <Header />
      <Margin />
      <SearchBar />
      <Info>
        <p>내가 사는 도시의 현재 날씨와</p>
        <p>3시간 간격으로 볼 수 있는 내일 날씨까지.</p>
        <p>지금 바로 원하는 도시의 일기예보를 확인해보세요!</p>
      </Info>
      <Footer />
    </Background>
  );
};

export default MainPage;
