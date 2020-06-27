import React, { Component } from "react";
import bank from "../SamplePlan+ModuleBank/ModuleBankFunction";
import CellFlat from "./CellFlat";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 400px;
  height: 100%;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Selector = styled.select`
  display: block;
  position: fixed;
  z-index: 5;
  width: 17%;
  border: none;
  outline: none;
`;

const ModuleBankWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 95.2%;
  background: #5b5b5b;
  margin-top: 39px;
`;

class ModuleBank extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modules: this.props.data,
      selectedField: "Algo",
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
      <Container>
        <Selector
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
        </Selector>
        <ModuleBankWrapper>
          {console.log(this.props.data, this.state.modules)}
          {this.state.modules.map((item) => (
            <CellFlat key={item.moduleCode} data={item} />
          ))}
        </ModuleBankWrapper>
      </Container>
    );
  }
}

export default ModuleBank;
