import React from "react";
import styled from "styled-components";

const Text = styled.div`
  width: 430px;
  height: 50px;
  color: white;
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  background-color: rgb(0, 0, 0, 0.7);
  line-height: 50px;
  position: absolute;
  bottom: 0;
  right: 0;
`;

const Footer = () => {
  return <Text>ⓒ 2022 OpenWeather ® All rights reserved.</Text>;
};

export default Footer;
