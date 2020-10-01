import React, { Component, useContext } from "react";
import axios from "axios";
import styled from "styled-components";
import ModuleBank from "./ModuleBank";
import Table from "./Table";
import Stats from "./Stats";
import { allFieldsInit } from "../../Constants/AllFieldsInit";
import { templateInit } from "../../Constants/SamplePlan";

import * as firebase from "firebase/app";
import app from "../../FirebaseConfig";
// import { AuthContext } from "../../Auth";

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

const initCell = (col, row, selected) => {
  var mod,
    modData = {};
  if (selected !== "empty") {
    let area = template[selected];
    let modCol = area[col];
    mod = { moduleCode: modCol[row] };
  }
  return {
    id: col + "" + row,
    col: col,
    row: row,
    isSelected: false,
    mod: selected !== "empty" ? { mod } : { isEmpty: true },
    modData: selected !== "empty" ? { modData } : { isEmpty: true },
  };
};

const cellDataInit = (selected) => {
  const arr = [[], [], [], [], [], [], [], []];
  if (selected === undefined) {
    selected = "empty";
  }

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      arr[i].push(initCell(i, j, selected));
    }
  }
  return arr;
};

const allFields = allFieldsInit();
const template = templateInit();
class Container extends Component {
  state = {
    fetchedModules: [], // list of fetched modules from NUSMods
    cellData: cellDataInit(), // the data inside the timetable
    modBankList: [],
    initBankList: [],
    selectedField: {}, // selected field (module bank), contains id, name, filter
    focusArea: null, // selected field (focus area + sample plan)
    selectedMod: null, // for inserting, deleting, and swapping modules
    isSelected: false,
    canAssign: false,
    canMove: false,
    toMove: {},
    noMcs: 0, // mc counter
  };

  // componentWillMount() {
  //   this.fetchDatabase();
  // }

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

  fetchDatabase = () => {
    var user = firebase.auth().currentUser;
    const userName = user.email.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, "_");
    app
      .database()
      .ref("/user" + userName)
      .once("value")
      .then((snapshot) =>
        this.setState(
          {
            cellData: snapshot.val().cellData,
            focusArea: snapshot.val().focusArea,
            noMcs: snapshot.val().noMcs,
          },
          () => console.log(this.state.cellData)
        )
      );
  };

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
      // from moduleBank to calendar
      const newCellData = this.state.cellData.slice();

      if (
        newCellData.some((col) =>
          col.some(
            (cell) => cell.mod.moduleCode === this.state.selectedMod.moduleCode
          )
        )
      ) {
        alert(this.state.selectedMod.moduleCode + " already in calendar!");
      } else {
        if (newCellData[data.col][data.row].mod.isEmpty !== true) {
          newCellData[data.col][data.row].modData.then((res) =>
            this.setState({
              noMcs: this.state.noMcs - Number(res.moduleCredit),
            })
          );
        }
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
    if (data.mod.isEmpty !== true && !this.state.canMove) {
      //to avoid non-deleting cells due to moving (negative mc count)
      const newCellData = this.state.cellData.slice();
      newCellData[data.col][data.row] = {
        ...newCellData[data.col][data.row],
        mod: { isEmpty: true },
        selectedModData: { isEmpty: true },
        isSelected: false,
      };
      data.modData.then((res) =>
        this.setState({ noMcs: this.state.noMcs - Number(res.moduleCredit) })
      );
      this.setState({
        cellData: newCellData,
      });
    }
  };

  handleSamplePlan = (event) => {
    // reset the no of MCs and the content of the cellData
    this.setState({ noMcs: 0 });
    const selected = event.target.value;
    var newCellData = cellDataInit(selected);
    for (let col = 0; col < 8; col++) {
      for (let row = 0; row < 8; row++) {
        let moduleCode = newCellData[col][row].mod.mod.moduleCode;
        // replace the "mod" (currently filled with moduleCode only) with data from NUSMods
        let newMod = this.state.fetchedModules.find(
          (item) => item.moduleCode === moduleCode
        );
        newCellData[col][row] = {
          ...newCellData[col][row],
          mod: newMod !== undefined ? newMod : { isEmpty: true },
          modData:
            newMod !== undefined
              ? this.fetchModData(moduleCode)
              : { isEmpty: true },
        };
      }
    }
    this.setState({ cellData: newCellData, focusArea: selected });
    console.log(this.state.cellData);
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
          handleDelete={this.handleDelete}
          handleSamplePlan={this.handleSamplePlan}
        />
        <Stats
          noMcs={this.state.noMcs}
          saveData={this.state}
          focusArea={this.state.focusArea}
          fetchDatabase={this.fetchDatabase}
        />
      </Wrapper>
    );
  }
}

export default Container;
