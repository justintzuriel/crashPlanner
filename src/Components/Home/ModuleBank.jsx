import React, { Component } from "react";
import CellFlat from "./CellFlat";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 400px;
  height: 100%;
`;

const Selector = styled.select`
  position: relative;
  border: none;
  outline: none;
`;

const ModuleBankWrapper = styled.div`
  position: relative;
  width: 400px;
  height: 95.2%;
  background: #5b5b5b;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
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
