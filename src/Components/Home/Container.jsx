import React, { useState, useEffect } from "react";
import axios from "axios";
import ModuleBank from "./ModuleBank";
import styled from "styled-components";
import Table from "./Table";

const Wrapper = styled.div`
  width: auto;
  display: flex;
`;

function Container() {
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
      <ModuleBank data={module} />
      <Table data={module} />
    </Wrapper>
  );
}

export default Container;
