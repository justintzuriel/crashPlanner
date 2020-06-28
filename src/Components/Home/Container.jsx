import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import ModuleBank from "./ModuleBank";
import Table from "./Table";
import Stats from "./Stats";
import { allFieldsInit } from "../../Constants/AllFieldsInit";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 95%;
  height: 800px;
  border-radius: 1rem;
  margin: auto;
  margin-top: 30px;
  background: white;
  overflow: hidden;
`;

const initCell = (col, row) => {
  return {
    id: col + "" + row,
    col: col,
    row: row,
    isSelected: false,
    mod: {},
    modData: {},
  };
};
const cellDataInit = () => {
  const arr = [[], [], [], [], [], [], [], []];
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      arr[i].push(initCell(i, j));
    }
  }
  return arr;
};

const allFields = allFieldsInit();

class Container extends Component {
  state = {
    fetchedModules: [],
    cellData: cellDataInit(),
    modBankList: [],
    initBankList: [],
    selectedField: {},
    selectedMod: null,
    isSelected: false,
    canAssign: false,
    canMove: false,
    toMove: {},
    noMcs: 0,
  };

  componentDidMount() {
    axios
      .get("https://api.nusmods.com/v2/2019-2020/moduleList.json")
      .then((result) => {
        this.setState({
          fetchedModules: result.data,
          modBankList: result.data,
          initBankList: result.data,
        });
      })
      .catch((err) => console.log(err));
  }

  fetchModData = (moduleCode) => {
    return axios
      .get(
        "https://api.nusmods.com/v2/2019-2020/modules/" + moduleCode + ".json"
      )
      .then((res) => {
        this.setState({
          noMcs: this.state.noMcs + Number(res.data.moduleCredit),
        });
        return res.data;
      })
      .catch((err) => console.log(err));
  };

  computeMcs = () => {
    let counter = 0;
    this.state.cellData.forEach((col) => {
      col.forEach((cell) => {
        counter += Number(cell.modData);
      });
    });
    return counter;
  };

  handleFieldChange = (event) => {
    const selected = allFields[event.target.value];
    const newList = this.state.fetchedModules.filter(selected.filter);
    this.setState({
      selectedField: selected,
      modBankList: newList,
      initBankList: newList,
    });
  };

  handleModSelect = (moduleCode) => {
    // reset any selected cells
    if (this.state.canMove) {
      const newCellData = this.state.cellData.slice();
      newCellData[this.state.toMove.col][this.state.toMove.row] = {
        ...newCellData[this.state.toMove.col][this.state.toMove.row],
        isSelected: false,
      };
      this.setState({
        cellData: newCellData,
        canMove: false,
      });
    }
    const newList = this.state.modBankList.map((mod) => {
      if (mod.moduleCode === moduleCode) {
        if (mod.isSelected) {
          this.setState({ selectedMod: null, canAssign: false });
        } else {
          this.setState({ selectedMod: mod, canAssign: true });
        }
        return { ...mod, isSelected: !mod.isSelected };
      } else {
        return { ...mod, isSelected: false };
      }
    });
    this.setState({ modBankList: newList });
  };

  handleCellSelect = (data) => {
    if (this.state.canAssign) {
      // from moduleBank to calender
      const newCellData = this.state.cellData.slice();

      if (
        newCellData.some((col) =>
          col.some(
            (cell) => cell.mod.moduleCode === this.state.selectedMod.moduleCode
          )
        )
      ) {
        alert(this.state.selectedMod.moduleCode + " already in calender!");
      } else {
        newCellData[data.col][data.row] = {
          ...newCellData[data.col][data.row],
          mod: this.state.selectedMod,
          modData: this.fetchModData(this.state.selectedMod.moduleCode),
        };
        this.setState({
          cellData: newCellData,
        });
      }
      this.setState({
        modBankList: this.state.initBankList,
        selectedMod: null,
        canAssign: false,
      });
    } else if (data.mod.moduleCode) {
      // copy from one cell
      const newCellData = this.state.cellData.slice();
      newCellData[data.col][data.row] = {
        ...newCellData[data.col][data.row],
        isSelected: true,
      };
      this.setState({
        cellData: newCellData,
        selectedMod: data.mod,
        selectedModData: data.modData,
        canMove: true,
        toMove: { col: data.col, row: data.row },
      });
    }
    if (this.state.canMove) {
      // paste to another cell
      const newCellData = this.state.cellData.slice();
      newCellData[data.col][data.row] = {
        ...newCellData[data.col][data.row],
        mod: this.state.selectedMod,
        modData: this.state.selectedModData,
        isSelected: false,
      };
      newCellData[this.state.toMove.col][this.state.toMove.row] = {
        ...newCellData[this.state.toMove.col][this.state.toMove.row],
        mod: data.mod,
        modData: data.modData,
        isSelected: false,
      };
      this.setState({
        cellData: newCellData,
        selectedMod: null,
        canMove: false,
      });
    }
  };

  handleDelete = (data) => {
    if (Object.keys(data.mod).length === 0) {
      return;
    }
    const newCellData = this.state.cellData.slice();
    newCellData[data.col][data.row] = {
      ...newCellData[data.col][data.row],
      mod: {},
      selectedModData: {},
      isSelected: false,
    };
    data.modData.then((res) =>
      this.setState({ noMcs: this.state.noMcs - Number(res.moduleCredit) })
    );
    this.setState({
      cellData: newCellData,
    });
  };

  test = () => {};

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
          handleDelete={this.handleDelete}
        />
        <Stats noMcs={this.state.noMcs} />
      </Wrapper>
    );
  }
}

export default Container;
