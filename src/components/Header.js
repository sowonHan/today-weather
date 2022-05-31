import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Back = styled(Link)`
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
  return <Back to="/today-weather/">오늘날씨어때?</Back>;
};

export default Header;
