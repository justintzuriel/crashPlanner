import React from "react";
import "./Components.css";
import Cell from "./Cell";
import SamplePlan from "../SamplePlan+ModuleBank/SamplePlan";
import styled from "styled-components";
import { Component } from "react";

const TableWrapper = styled.div`
  width: auto;
  border-style: solid;
  border-color: red;
  display: flex;
`;

const ColumnWrapper = styled.div`
  height: 570px;
  width: 120px;
  background: #5b5b5b;
  border-radius: 1rem;
  border-style: solid;
  border-color: yellow;
  align: center;
  position: relative;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modules: [],
      focusArea: "Algo",
    };
  }

  handlePlan = (event) => {
    // using the second parameter (callback function) to prevent delayed rendering of the list
    // since setState is asynchronous
    this.setState({ focusArea: event.target.value }, () => {
      switch (this.state.focusArea) {
        case "Algo":
          this.setState({
            modules: [
              this.props.data.filter(SamplePlan.AlgoS1),
              this.props.data.filter(SamplePlan.AlgoS2),
              this.props.data.filter(SamplePlan.AlgoS3),
              this.props.data.filter(SamplePlan.AlgoS4),
              this.props.data.filter(SamplePlan.AlgoS5),
              this.props.data.filter(SamplePlan.AlgoS6),
              this.props.data.filter(SamplePlan.AlgoS7),
              this.props.data.filter(SamplePlan.AlgoS8),
            ],
          });
          break;
        case "AI":
          this.setState({
            modules: [
              this.props.data.filter(SamplePlan.AIS1),
              this.props.data.filter(SamplePlan.AIS2),
              this.props.data.filter(SamplePlan.AIS3),
              this.props.data.filter(SamplePlan.AIS4),
              this.props.data.filter(SamplePlan.AIS5),
              this.props.data.filter(SamplePlan.AIS6),
              this.props.data.filter(SamplePlan.AIS7),
              this.props.data.filter(SamplePlan.AIS8),
            ],
          });
          break;
        case "Graphics":
          this.setState({
            modules: [
              this.props.data.filter(SamplePlan.GraphicsS1),
              this.props.data.filter(SamplePlan.GraphicsS2),
              this.props.data.filter(SamplePlan.GraphicsS3),
              this.props.data.filter(SamplePlan.GraphicsS4),
              this.props.data.filter(SamplePlan.GraphicsS5),
              this.props.data.filter(SamplePlan.GraphicsS6),
              this.props.data.filter(SamplePlan.GraphicsS7),
              this.props.data.filter(SamplePlan.GraphicsS8),
            ],
          });
          break;
        case "Security":
          this.setState({
            modules: [
              this.props.data.filter(SamplePlan.SecurityS1),
              this.props.data.filter(SamplePlan.SecurityS2),
              this.props.data.filter(SamplePlan.SecurityS3),
              this.props.data.filter(SamplePlan.SecurityS4),
              this.props.data.filter(SamplePlan.SecurityS5),
              this.props.data.filter(SamplePlan.SecurityS6),
              this.props.data.filter(SamplePlan.SecurityS7),
              this.props.data.filter(SamplePlan.SecurityS8),
            ],
          });
          break;
        case "DB":
          this.setState({
            modules: [
              this.props.data.filter(SamplePlan.DBS1),
              this.props.data.filter(SamplePlan.DBS2),
              this.props.data.filter(SamplePlan.DBS3),
              this.props.data.filter(SamplePlan.DBS4),
              this.props.data.filter(SamplePlan.DBS5),
              this.props.data.filter(SamplePlan.DBS6),
              this.props.data.filter(SamplePlan.DBS7),
              this.props.data.filter(SamplePlan.DBS8),
            ],
          });
          break;
        case "Media":
          this.setState({
            modules: [
              this.props.data.filter(SamplePlan.MediaS1),
              this.props.data.filter(SamplePlan.MediaS2),
              this.props.data.filter(SamplePlan.MediaS3),
              this.props.data.filter(SamplePlan.MediaS4),
              this.props.data.filter(SamplePlan.MediaS5),
              this.props.data.filter(SamplePlan.MediaS6),
              this.props.data.filter(SamplePlan.MediaS7),
              this.props.data.filter(SamplePlan.MediaS8),
            ],
          });
          break;
        case "Network":
          this.setState({
            modules: [
              this.props.data.filter(SamplePlan.NetworkS1),
              this.props.data.filter(SamplePlan.NetworkS2),
              this.props.data.filter(SamplePlan.NetworkS3),
              this.props.data.filter(SamplePlan.NetworkS4),
              this.props.data.filter(SamplePlan.NetworkS5),
              this.props.data.filter(SamplePlan.NetworkS6),
              this.props.data.filter(SamplePlan.NetworkS7),
              this.props.data.filter(SamplePlan.NetworkS8),
            ],
          });
          break;
        case "Parallel":
          this.setState({
            modules: [
              this.props.data.filter(SamplePlan.ParallelS1),
              this.props.data.filter(SamplePlan.ParallelS2),
              this.props.data.filter(SamplePlan.ParallelS3),
              this.props.data.filter(SamplePlan.ParallelS4),
              this.props.data.filter(SamplePlan.ParallelS5),
              this.props.data.filter(SamplePlan.ParallelS6),
              this.props.data.filter(SamplePlan.ParallelS7),
              this.props.data.filter(SamplePlan.ParallelS8),
            ],
          });
          break;
        case "Languages":
          this.setState({
            modules: [
              this.props.data.filter(SamplePlan.LanguagesS1),
              this.props.data.filter(SamplePlan.LanguagesS2),
              this.props.data.filter(SamplePlan.LanguagesS3),
              this.props.data.filter(SamplePlan.LanguagesS4),
              this.props.data.filter(SamplePlan.LanguagesS5),
              this.props.data.filter(SamplePlan.LanguagesS6),
              this.props.data.filter(SamplePlan.LanguagesS7),
              this.props.data.filter(SamplePlan.LanguagesS8),
            ],
          });
          break;
        case "SE":
          this.setState({
            modules: [
              this.props.data.filter(SamplePlan.SES1),
              this.props.data.filter(SamplePlan.SES2),
              this.props.data.filter(SamplePlan.SES3),
              this.props.data.filter(SamplePlan.SES4),
              this.props.data.filter(SamplePlan.SES5),
              this.props.data.filter(SamplePlan.SES6),
              this.props.data.filter(SamplePlan.SES7),
              this.props.data.filter(SamplePlan.SES8),
            ],
          });
          break;
      }
    });
  };

  handleSelectTable = (moduleCode) => {
    this.props.handleSelect(moduleCode); // call the handleSelectContainer to update the state in the container component
    console.log("Jancuk");
  };

  render() {
    return (
      <div>
        <select
          className="custom-select"
          value={this.state.focusArea}
          onChange={this.handlePlan}
        >
          <option value="Algo"> Algorithms and Theory</option>
          <option value="AI">Artificial Intelligence</option>
          <option value="Graphics">Computer Graphics and Games</option>
          <option value="Security">Computer Security</option>
          <option value="DB">Database Systems</option>
          <option value="Media">Multimedia Information Retrieval</option>
          <option value="Network">Networking and Distributed Systems</option>
          <option value="Parallel">Parallel Computing</option>
          <option value="Languages">Programming Languages</option>
          <option value="SE">Software Engineering</option>
        </select>
        {/* {console.log(this.props.data, this.state.modules)} */}
        <TableWrapper>
          {this.state.modules.map((arr) => (
            <ColumnWrapper>
              {arr.map((item) => (
                <Cell
                  key={item.moduleCode}
                  data={item}
                  handleSelect={this.handleSelectTable}
                />
              ))}
            </ColumnWrapper>
          ))}
        </TableWrapper>
      </div>
    );
  }
}

export default Table;