import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";

const ResultPage = () => {
  return (
    <div>
      <Header />
      <SearchBar />
      <div>
        <div>탭</div>
        <div>데이터 나오는 부분</div>
      </div>
      <Footer />
    </div>
  );
};

export default ResultPage;
