import React, { Component } from "react";
import styled from "styled-components";

const StatsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 100%;
  text-align: center;
  color: #355428;
  overflow: hidden;
`;

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

class Stats extends Component {
  render() {
    return (
      <StatsWrapper>
        <StyledSpan>No. of MCs in planner:</StyledSpan>
        <Number>{this.props.noMcs}</Number>
      </StatsWrapper>
    );
  }
}

export default Stats;
