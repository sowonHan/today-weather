import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Today from "./Today";
import Yesterday from "./Yesterday";
// import axios from "axios";

const Current = ({ latlon }) => {
  return (
    <>
      <Today latlon={latlon} />
      <hr />
      <Yesterday />
    </>
  );
};

export default Current;
