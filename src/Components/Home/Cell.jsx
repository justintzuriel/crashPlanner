import React, { Component } from "react";
import styled from "styled-components";
const SButton = styled.button`
  width: 100px;
  height: 50px;
  box-sizing: border-box;
  background: ${(props) => (props.YisSelected ? "yellow" : "#6aa84fff")};
  display: flex;
  justify-content: center;
  color: ${(props) => (props.isSelected ? "black" : "white")};
  font-family: Arial, Helvetica, sans-serif;
  align-items: center;
  border-radius: 10%;
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
