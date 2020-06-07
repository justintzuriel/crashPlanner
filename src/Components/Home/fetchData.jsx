import React, { useState, useEffect } from "react";
import axios from "axios";
import FilterModules from "./FilterModules";
import styled from "styled-components";
// import FilterCompSec from "./../SamplePlan/ComputerSecurity";

const Wrapper = styled.div`
  // overflow: hidden;
  width: 150px;
`;

function FetchData() {
  const [module, setModule] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.nusmods.com/v2/2019-2020/moduleList.json")
      .then((res) => {
        console.log(res);
        setModule(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Wrapper>
      <FilterModules data={module} />
    </Wrapper>
  );
}

export default FetchData;
