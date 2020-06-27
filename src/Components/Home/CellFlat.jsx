import React, { Component } from "react";
import styled from "styled-components";
const SButton = styled.button`
  display: block;
  position: relative;
  width: 100%;
  height: 30px;
  background: ${(props) => (props.isSelected ? "#94eb6e" : "#6aa84f")};
  color: ${(props) => (props.isSelected ? "black" : "white")};
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  text-align: left;
  padding-left: 20px;
  padding-right: 20px;
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  cursor: pointer;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  :hover {
    background: #94eb6e;
    color: black;
  }
`;

class CellFlat extends Component {
  render() {
    return (
      <SButton
        isSelected={this.props.data.isSelected}
        onClick={() => this.props.handleSelect(this.props.data.moduleCode)}
      >
        {this.props.data.moduleCode + " " + this.props.data.title}
      </SButton>
    );
  }
}

export default CellFlat;
