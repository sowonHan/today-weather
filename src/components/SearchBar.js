import React, { useState } from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import { useSearchParams, useNavigate } from "react-router-dom";

const Background = styled.div`
  width: 1280px;
  height: 70px;
  margin: 0 auto;
  border-radius: 10px;
  background-color: rgb(0, 194, 255, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 960px;
  height: 35px;
  border-radius: 10px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Input = styled.input`
  display: inline-block;
  font-size: 1rem;
  color: #6d6d6d;
  margin-left: 15px;
  width: 800px;
  border: none;

  &:focus {
    outline: none;
  }
`;

const Icon = styled(BiSearch)`
  width: 30px;
  height: 30px;
  margin-right: 5px;
  cursor: pointer;
`;

const SearchBar = () => {
  let navigate = useNavigate();

  const [city, setCity] = useState("");
  const onChangeCity = (e) => {
    setCity(e.target.value);
  };

  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q");

  const onSearchCity = () => {
    setSearchParams({ q: city });

    // navigate("/today", { state: q });
  };

  return (
    <Background>
      <Container>
        <Input
          type="text"
          placeholder="도시 이름을 입력하세요."
          value={city}
          onChange={onChangeCity}
        />
        <Icon onClick={onSearchCity} />
      </Container>
    </Background>
  );
};

export default SearchBar;
