import React from "react";
import { Segmented } from "antd";
import "./Tab.css";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const ColorSeg = styled(Segmented)`
  height: 50px;
  background-color: #9df3ff;
  text-align: center;

  &:not(.ant-segmented-disabled):hover,
  .ant-segmented:not(.ant-segmented-disabled):focus {
    background-color: #9df3ff;
  }

  & .ant-segmented-thumb {
    /* background-color: #00c2ff; */
    background-color: #9df3ff;
  }

  & label.ant-segmented-item-selected {
    /* background-color: #00c2ff; */
    background-color: #9df3ff;
  }

  .ant-segmented-item-selected {
    box-shadow: none;
  }

  & a {
    font-size: 1.2rem;
    font-weight: 500;
    color: black;
    line-height: 45px;
    display: block;
    width: 606px;
    height: 45px;
    border-radius: 20px;
  }
`;

const Tab = () => {
  const activeStyle = {
    backgroundColor: "#00c2ff",
  };

  return (
    <ColorSeg
      block
      options={[
        {
          label: (
            <NavLink
              to="/today"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              현재 날씨
            </NavLink>
          ),
          value: "today",
        },
        {
          label: (
            <NavLink
              to="/hourly"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              시간별 예보
            </NavLink>
          ),
          value: "hourly",
        },
      ]}
    ></ColorSeg>
  );
};

export default Tab;
