import React from "react";
import styled from "styled-components";

const Text = styled.h3`
  width: 330px;
  height: 30px;
  color: white;
  font-weight: 400;
  font-size: 1rem;
  text-align: right;
  background-color: rgb(0, 0, 0, 0.7);
  padding-right: 10px;
  line-height: 28px;
  position: absolute;
  bottom: 0;
  right: 0;
`;

const Footer = () => {
  return <Text>ⓒ 2022 OpenWeather ® All rights reserved.</Text>;
};

export default Footer;
