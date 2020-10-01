import React, { Component } from "react";
import styled from "styled-components";
import SaveData from "./SaveData";
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
  margin-top: 18x;
  margin-bottom: 0px;
`;

const Number = styled.p`
  font-size: 79.5px;
  font-weight: 600;
`;

const Instructions = styled.p`
  text-align: left;
  padding: 0px 15px 0px 15px;
  font-size: 15.5px;
  font-weight: 600;
`;

const List = styled.ul`
  padding-left: 20px;
  font-size: 13.5px;
  font-weight: normal;
`;

class Stats extends Component {
  componentDidUpdate(prevProps) {
    if (
      this.props.saveData.cellData !== prevProps.saveData.cellData ||
      this.props.saveData.noMcs !== prevProps.saveData.noMcs
    ) {
      SaveData(this.props.saveData);
    }
  }
  render() {
    return (
      <StatsWrapper>
        <MCWrapper>
          <StyledSpan>No. of MCs in planner:</StyledSpan>
          <Number>{this.props.noMcs}</Number>
        </MCWrapper>
        <Instructions>
          <GraduationCheck
            calendarData={this.props.saveData.cellData}
            focusArea={this.props.focusArea}
            noMcs={this.props.noMcs}
          />
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
            <li>Select your desired focus area</li>
            <li>Select a module from the module bank or from a cell</li>
            <li>Click on a cell to place the selected module</li>
            <li>
              With no cell selected, double-click on a cell to delete its
              contents
            </li>
            <li>
              Click the button to check your modules after finished adding them
              to the calendar
            </li>
          </List>
        </Instructions>
        <button onClick={this.props.fetchDatabase} className="btn btn-Success">
          Import saved data
        </button>
      </StatsWrapper>
    );
  }
}

export default Stats;
