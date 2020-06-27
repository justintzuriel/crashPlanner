import React, { Component } from "react";
import styled from "styled-components";
const SButton = styled.button`
  position: relative;
  width: 100%;
  height: 30px;
  background: ${(props) => (props.YisSelected ? "yellow" : "#6aa84fff")};
  color: ${(props) => (props.isSelected ? "black" : "white")};
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  text-align: left;
  padding-left: 20px;
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  cursor: pointer;
  :hover {
    background: #d3c1e5;
    border: 1px solid #d3c1e5;
  }
`;

class Cell extends Component {
  handleSelect = () => {
    this.props.handleSelect(this.props.data.moduleCode); // call the handleSelectTable to update the state in the container component
  };

  render() {
    return (
      <SButton
        isSelected={this.props.data.isSelected}
        onClick={this.handleSelect}
      >
        {" "}
        {this.props.data.moduleCode}
      </SButton>
    );
  }
}

export default Cell;
