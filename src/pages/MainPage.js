import React from "react";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import SearchBar from "./../components/SearchBar";
import styled from "styled-components";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("/images/main.jpg");
  background-size: cover;
  background-position: center;
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
    font-size: 32px;
    color: white;
    font-weight: 500;
  }
`;

const MainPage = () => {
  return (
    <Background>
      <Header />
      <Margin></Margin>
      <SearchBar />
      <Info>
        <p>어제와 비교한 현재 날씨</p>
        <p>이틀치의 시간별 예보</p>
        <p>일주일 단위 주간 예보까지</p>
        <p>원하는 도시의 기상 정보를 지금 바로 확인하세요.</p>
      </Info>
      <Footer />
    </Background>
  );
};

export default MainPage;
