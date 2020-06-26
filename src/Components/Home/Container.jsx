import React, { Component } from "react";
import axios from "axios";
import ModuleBank from "./ModuleBank";
import styled from "styled-components";
import Table from "./Table";

const Wrapper = styled.div`
  width: auto;
  display: flex;
  border-color: blue;
  border-radius: 1rem;
  border-style: solid;
  margin: auto;
`;

class Container extends Component {
  constructor() {
    super();
    this.state = {
      modules: [],
      isSelected: false,
    };
  }

  componentDidMount() {
    axios
      .get("https://api.nusmods.com/v2/2019-2020/moduleList.json")
      .then((result) => {
        const final = result.data.map((item) => ({
          ...item,
          isSelected: false,
        }));
        console.log(final);
        this.setState({ modules: final });
      })
      .catch((err) => console.log(err));
  }

  handleSelectContainer = (moduleCode) => {
    this.setState({ isSelected: true }, () => {
      const idx = this.state.modules.findIndex(
        (item) => item.moduleCode === moduleCode
      );
      const reset = this.state.modules.map((item) => ({
        ...item,
        isSelected: false,
      }));
      reset[idx].isSelected = true;
      console.log(reset);
      this.setState({
        modules: reset,
      });
    });
  };

  render() {
    return (
      <Wrapper>
        <ModuleBank data={this.state.modules} />
        <Table
          data={this.state.modules}
          handleSelect={this.handleSelectContainer}
        />
      </Wrapper>
    );
  }
}

export default Container;
