import React from "react";
import styled from "styled-components";

const Back = styled.div`
  width: 230px;
  height: 50px;
  background-color: rgb(0, 0, 0, 0.5);
  font-family: "Jua", sans-serif;
  font-size: 2rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header = () => {
  return <Back>오늘날씨어때?</Back>;
};

export default Header;
