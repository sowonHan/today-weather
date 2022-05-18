import React from "react";
import styled from "styled-components";

const Back = styled.div`
  width: 250px;
  height: 65px;
  background-color: rgb(0, 0, 0, 0.5);
  font-family: "Jua", sans-serif;
  font-weight: 400;
  font-size: 36px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header = () => {
  return <Back>오늘날씨어때?</Back>;
};

export default Header;
