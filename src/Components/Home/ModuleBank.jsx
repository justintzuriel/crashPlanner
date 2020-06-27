import React, { Component } from "react";
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
  render() {
    return (
      <Container>
        <Selector
          value={this.props.selectedField.id}
          className="custom-select"
          onChange={this.props.handleFieldChange}
        >
          {Object.keys(this.props.allFields).map((key) => {
            return (
              <option value={key}>{this.props.allFields[key].name}</option>
            );
          })}
        </Selector>
        <ModuleBankWrapper>
          {this.props.modBankList.map((item) => (
            <CellFlat
              key={item.moduleCode}
              data={item}
              handleSelect={this.props.handleSelect}
            />
          ))}
        </ModuleBankWrapper>
      </Container>
    );
  }
}

export default ModuleBank;
