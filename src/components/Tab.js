import React, {useState} from "react";
import { Segmented } from "antd";
import "./Tab.css";
import styled from "styled-components";
// import { useNavigate } from "react-router-dom";

const ColorSeg = styled(Segmented)`
  height: 50px;
  background-color: #9df3ff;
  text-align: center;

  &:not(.ant-segmented-disabled):hover,
  .ant-segmented:not(.ant-segmented-disabled):focus {
    background-color: #9df3ff;
  }

  & .ant-segmented-thumb {
    background-color: #00c2ff;
  }

  & label.ant-segmented-item-selected {
    background-color: #00c2ff;
  }

  & .ant-segmented-item-label {
    font-size: 1.2rem;
    font-weight: 500;
    color: black;
    line-height: 45px;
  }
`;

const Tab = () => {
  const [value, setValue] = useState('현재 날씨')
  console.log('탭: ', value);
  return <ColorSeg block options={["현재 날씨", "시간별 예보"]} value={value} onChange={setValue} />;
}

export default Tab;
