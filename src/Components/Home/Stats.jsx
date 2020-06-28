import React, { Component } from "react";
import styled from "styled-components";

const StatsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 100%;
  text-align: center;
  justify-content: space-between;
  color: #355428;
  overflow: hidden;
`;

const MCWrapper = styled.div``;

const StyledSpan = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin-top: 40px;
  margin-bottom: 0px;
`;

const Number = styled.p`
  font-size: 100px;
  font-weight: 600;
`;

const Instructions = styled.p`
  text-align: left;
  padding: 20px;
  font-size: 16px;
  font-weight: 600;
`;

const List = styled.ul`
  padding-left: 20px;
  font-size: 14px;
  font-weight: normal;
`;

class Stats extends Component {
  render() {
    return (
      <StatsWrapper>
        <MCWrapper>
          <StyledSpan>No. of MCs in planner:</StyledSpan>
          <Number>{this.props.noMcs}</Number>
        </MCWrapper>
        <Instructions>
          How to use:
          <List>
            <li>Select a module from the module bank or from a cell</li>
            <li>Click on a cell to place the selected module</li>
            <li>Double-click on a cell to delete the module</li>
          </List>
        </Instructions>
      </StatsWrapper>
    );
  }
}

export default Stats;
