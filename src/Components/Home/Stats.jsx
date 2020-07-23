import React, { Component } from "react";
import styled from "styled-components";
import SaveButton from "./SaveButton";
import GraduationCheck from "./GraduationCheck";
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
          <GraduationCheck calendarData={this.props.saveData} />
          {/* Features to finish:
          <List>
            <li>Fetch saved user planner data</li>
            <li>Focus area calendar templates</li>
            <li>Graduation checklist</li>
            <li>Fetch/filter optimization</li>
          </List> */}
        </Instructions>
        <Instructions>
          How to use:
          <List>
            <li>Select a module from the module bank or from a cell</li>
            <li>Click on a cell to place the selected module</li>
            <li>
              With no cell selected, double-click on a cell to delete its
              contents
            </li>
            <li>
              While logged-in, click the save button below to save your planner
              data
            </li>
          </List>
        </Instructions>
        <SaveButton data={this.props.saveData} focusArea={this.props.focusArea}/>
      </StatsWrapper>
    );
  }
}

export default Stats;
