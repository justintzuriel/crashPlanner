import React, { Component } from "react";
import bank from "../SamplePlan+ModuleBank/ModuleBankFunction";
import Cell from "./Cell";
import styled from "styled-components";

const ModuleBankWrapper = styled.div`
  height: 570px;
  width: auto;
  background: #5b5b5b;
  border-radius: 1rem;
  margin: auto;
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
      modules: this.props.data,
      selectedField: "Algo",
    };
  }

  handleField = (event) => {
    switch (event.target.value) {
      case "Algo":
        return this.setState({
          modules: this.props.data.filter(bank.FilterAlgo),
          selectedField: event.target.value,
        });
      case "AI":
        return this.setState({
          modules: this.props.data.filter(bank.FilterAlgo),
          selectedField: event.target.value,
        });
      case "Graphics":
        return this.setState({
          modules: this.props.data.filter(bank.FilterAlgo),
          selectedField: event.target.value,
        });
      case "Security":
        return this.setState({
          modules: this.props.data.filter(bank.FilterAlgo),
          selectedField: event.target.value,
        });
      case "DB":
        return this.setState({
          modules: this.props.data.filter(bank.FilterAlgo),
          selectedField: event.target.value,
        });
      case "Media":
        return this.setState({
          modules: this.props.data.filter(bank.FilterAlgo),
          selectedField: event.target.value,
        });
      case "Network":
        return this.setState({
          modules: this.props.data.filter(bank.FilterAlgo),
          selectedField: event.target.value,
        });
      case "Parallel":
        return this.setState({
          modules: this.props.data.filter(bank.FilterAlgo),
          selectedField: event.target.value,
        });
      case "Languages":
        return this.setState({
          modules: this.props.data.filter(bank.FilterAlgo),
          selectedField: event.target.value,
        });
      case "SE":
        return this.setState({
          modules: this.props.data.filter(bank.FilterAlgo),
          selectedField: event.target.value,
        });
      default:
        return this.setState({
          modules: this.props.data.filter(bank.FilterAlgo),
          selectedField: event.target.value,
        });
    }
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
        {console.log(this.props.data, this.state.modules)}
        {this.state.modules.map((item) => (
          <Cell data={item} />
        ))}
      </ModuleBankWrapper>
    );
  }
}

export default ModuleBank;
