import React, { Component } from "react";
import styled from "styled-components";
const SButton = styled.button`
  width: 100px;
  height: 50px;
  box-sizing: border-box;
  background: #6aa84fff;
  display: flex;
  justify-content: center;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  align-items: center;
  border-radius: 10%;
`;

class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moduleCode: this.props.moduleCode,
    };
  }

  render() {
    return <SButton> {this.state.moduleCode}</SButton>;
  }
}

export default Cell;
