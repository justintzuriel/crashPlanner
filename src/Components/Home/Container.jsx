import React, { Component } from "react";
import axios from "axios";
import ModuleBank from "./ModuleBank";
import styled from "styled-components";
import Table from "./Table";
import { allFieldsInit } from "../../Constants/AllFieldsInit";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 95%;
  height: 800px;
  border-radius: 1rem;
  margin: auto;
  margin-top: 30px;
  background-color: #a7b392;
  overflow: hidden;
`;

const cellDataInit = () => {
  const arr = [[], [], [], [], [], [], [], []];
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      arr[i].push({
        id: i + "" + j,
        col: i,
        row: j,
        isSelected: false,
        modCode: "",
      });
    }
  }
  console.log(arr);
  return arr;
};

const allFields = allFieldsInit();

class Container extends Component {
  state = {
    fetchedModules: [],
    cellData: cellDataInit(),
    modBankList: [],
    selectedField: {},
    selectedMod: null,
    isSelected: false,
  };

  componentDidMount() {
    axios
      .get("https://api.nusmods.com/v2/2019-2020/moduleList.json")
      .then((result) => {
        this.setState({
          fetchedModules: result.data,
          modBankList: result.data,
        });
      })
      .catch((err) => console.log(err));
  }

  handleFieldChange = (event) => {
    const selected = allFields[event.target.value];
    const newList = this.state.fetchedModules.filter(selected.filter);
    this.setState({ selectedField: selected, modBankList: newList });
  };

  handleModSelect = (moduleCode) => {
    const newList = this.state.modBankList.map((mod) => {
      if (mod.moduleCode === moduleCode) {
        if (mod.isSelected) {
          this.setState({ selectedMod: null });
        } else {
          this.setState({ selectedMod: mod });
        }
        return { ...mod, isSelected: !mod.isSelected };
      } else {
        return { ...mod, isSelected: false };
      }
    });
    this.setState({ modBankList: newList });
  };

  handleCellSelect = (col, row) => {
    if (this.state.selectedMod === null) {
      return;
    }
    const newCellData = this.state.cellData.slice();
    if (
      newCellData.some((col) =>
        col.some((cell) => cell.modCode === this.state.selectedMod.moduleCode)
      )
    ) {
      alert(this.state.selectedMod.moduleCode + " already in calender!");
    } else {
      newCellData[col][row] = {
        ...newCellData[col][row],
        modCode: this.state.selectedMod.moduleCode,
      };
      this.setState({ cellData: newCellData });
    }
  };

  render() {
    return (
      <Wrapper>
        <ModuleBank
          modBankList={this.state.modBankList}
          allFields={allFields}
          selectedField={this.state.selectedField}
          handleFieldChange={this.handleFieldChange}
          handleSelect={this.handleModSelect}
        />
        <Table
          cellData={this.state.cellData}
          handleSelect={this.handleCellSelect}
        />
      </Wrapper>
    );
  }
}

export default Container;
