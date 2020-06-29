import React, { Component } from "react";
import styled from "styled-components";
const SButton = styled.button`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background: ${(props) => (props.isSelected ? "#94eb6e" : "#6aa84f")};
  display: flex;
  justify-content: center;
  color: ${(props) => (props.isSelected ? "black" : "white")};
  font-family: Arial, Helvetica, sans-serif;
  align-items: center;
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  cursor: pointer;
  :hover {
    background: #bcff9e;
    color: black;
  }
`;

class Cell extends Component {
  render() {
    return (
      <SButton
        isSelected={this.props.data.isSelected}
        onClick={() => this.props.handleSelect(this.props.data)}
        onDoubleClick={() => this.props.handleDelete(this.props.data)}
      >
        {" "}
        {this.props.data.mod.moduleCode}
      </SButton>
    );
  }
}

export default Cell;
