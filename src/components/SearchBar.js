import React from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";

const Container = styled.div`
  width: 1280px;
  height: 100px;
  margin: 0 auto;
  border-radius: 10px;
  background-color: rgb(0, 194, 255, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.div`
  width: 960px;
  height: 48px;
  border-radius: 10px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PlaceHolder = styled.p`
  display: inline-block;
  font-weight: 400;
  font-size: 24px;
  color: #6d6d6d;
  margin-left: 10px;
`;

const Icon = styled(BiSearch)`
  width: 40px;
  height: 40px;
  margin-right: 5px;
`;

const SearchBar = () => {
  return (
    <Container>
      <Input>
        <PlaceHolder>도시 이름을 입력하세요.</PlaceHolder>
        <Icon />
      </Input>
    </Container>
  );
};

export default SearchBar;
