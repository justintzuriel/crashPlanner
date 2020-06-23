import React, { Component } from "react";
import Cell from "./Cell";
import bank from "../SamplePlan/ModuleBankFunction";
import { GridContextProvider, GridDropZone, GridItem } from "react-grid-dnd";
import styled from "styled-components";

const ModuleBankWrapper = styled.div`
  width: auto;
  border-style: solid;
  border-color: red;
  align: center;
  position: relative;
  overflow: hidden;
  ::-webkit-scrollbar {
    display: none;
  }
`;
class ModuleBank extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedField: "All",
      modules: this.props.data,
    };
  }

  handleField = (event) => {
    // using the second parameter (callback function) to prevent delayed rendering of the list
    // since setState is asynchronous
    this.setState({ selectedField: event.target.value }, () => {
      switch (this.state.selectedField) {
        case "Algo":
          this.setState({ modules: this.props.data.filter(bank.FilterAlgo) });
          break;
        case "AI":
          this.setState({ modules: this.props.data.filter(bank.FilterAI) });
          break;
        case "Graphics":
          this.setState({
            modules: this.props.data.filter(bank.FilterGraphics),
          });
          break;
        case "Security":
          this.setState({
            modules: this.props.data.filter(bank.FilterSecurity),
          });
          break;
        case "DB":
          this.setState({ modules: this.props.data.filter(bank.FilterDB) });
          break;
        case "Media":
          this.setState({ modules: this.props.data.filter(bank.FilterMedia) });
          break;
        case "Network":
          this.setState({
            modules: this.props.data.filter(bank.FilterNetwork),
          });
          break;
        case "Parallel":
          this.setState({
            modules: this.props.data.filter(bank.FilterParallel),
          });
          break;
        case "Languages":
          this.setState({
            modules: this.props.data.filter(bank.FilterLanguages),
          });
          break;
        case "SE":
          this.setState({ modules: this.props.data.filter(bank.FilterSE) });
          break;
        default:
          this.setState({ modules: this.props.data });
          break;
      }
    });
  };

  render() {
    return (
      <ModuleBankWrapper>
        <select
          className="custom-select"
          value={this.state.selectedField}
          onChange={this.handleField}
        >
          <option value="All">ALL</option>
          <option value="Algo"> Algorithms and Theory</option>
          <option value="AI">Artificial Intelligence</option>
          <option value="Graphics">Computer Graphics and Games</option>
          <option value="Security">Computer Security</option>
          <option value="DB">Database Systems</option>
          <option value="Media">Multimedia Information Retrieval</option>
          <option value="Network">Networking and Distributed Systems</option>
          <option value="Parallel">Parallel Computing</option>
          <option value="Languages">Programming Languages</option>
          <option velue="SE">Software Engineering</option>
        </select>
        <GridContextProvider>
          <GridDropZone
            className="dropzone"
            id="bank"
            boxesPerRow={1}
            rowHeight={70}
          >
            {this.state.modules.map((item) => (
              <GridItem key={item.moduleCode}>
                <div className="grid-item">
                  <div className="grid-item-content">{item.moduleCode}</div>
                </div>
              </GridItem>
            ))}
          </GridDropZone>
        </GridContextProvider>
      </ModuleBankWrapper>
    );
  }
}

export default ModuleBank;