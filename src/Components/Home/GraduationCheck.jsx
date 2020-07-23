import React, { Component } from "react";
import * as FieldModules from "../../Constants/FieldModules";

// data from props -> list of modules in the timetable and noMcs

// ULR -> modules start with GEXXXXX
// UE -> count the number of MCs ( >= 160)
// foundation, ITProfessionalism, Math -> for each element, .includes(modules)

// science -> starts with 'CN', 'DSA', 'FST', 'LSM', 'MA', 'PR', 'PHS', 'PC', 'QF', 'ST'
// actually science -> check list

// breath and depth -> 28 mcs of CS/CP/IFS
// complete at least 1 focus area -> how to check / differentiate with UEs?
// 1 focus area: finish 3 area primary modules, 1 level 4000++
// 12 MC level 4000++
// max 12 MC from CP -> the rest are counted as UEs

// 8 MC computer system team project
// CS3203 OR
// CS3216 AND CS3217 OR
// CS3281 AND 3282

// 12 MC internship

const modsOnCalendarInit = (data) => {
  const arr = [];
  for (let col = 0; col < 8; col++) {
    for (let row = 0; row < 8; row++) {
      if (Object.keys(data[col][row].mod).length !== 0) {
        arr.push(data[col][row].mod);
      }
    }
  }
  return arr;
};

class GraduationCheck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modsOnCalendar: modsOnCalendarInit(this.props.calendarData),
      UE: {
        modules: [],
        noMcs: 0,
        isCompleted: false,
      },
      ULR: {
        modules: [],
        isCompleted: false,
      },
      breadthAndDepth: false,
      foundation: {
        modules: [],
        isCompleted: false,
      },
      ITProfessionalism: {
        modules: [],
        isCompleted: false,
      },
      math: {
        modules: [],
        isCompleted: false,
      },
      science: {
        modules: [],
        isCompleted: false,
      },
    };
  }

  checkF_IT_M = () => {
    let sections = ["foundation", "ITProfessionalism", "math"];
    let ret = [true, true, true];
    let moduleState = this.state.modsOnCalendar;
    for (let i = 0; i < sections.length; i++) {
      let currentSection = FieldModules[sections[i]];
      console.log("current section:", currentSection);
      let sectionModuleList = [];
      currentSection.forEach((element) => {
        console.log("each element:", element);
        const index = moduleState.map((mod) => mod.moduleCode).indexOf(element);
        if (index > -1) {
          sectionModuleList.push(moduleState[index]);
          moduleState.splice(index, 1);
        } else ret[i] = false;
      });
      this.setState({
        [sections[i]]: {
          modules: sectionModuleList,
          isCompleted: ret[i],
        },
      });
    }
    this.setState({ modsOnCalendar: moduleState }, () =>
      console.log("[check] end of checkFITM: ", this.state)
    );
  };

  checkScience = () => {
    let complete = false;
    let scienceModule = [];
    let moduleState = this.state.modsOnCalendar;
    FieldModules.science.forEach((element) => {
      const index = moduleState.map((mod) => mod.moduleCode).indexOf(element);
      if (index > -1) {
        complete = true;
        scienceModule.push(moduleState[index]);
        moduleState.splice(index, 1);
      }
    });
    this.setState({
      science: {
        modules: scienceModule,
        isCompleted: complete,
      },
      modsOnCalendar: moduleState,
    });
  };

  checkULR = () => {
    let complete = true;
    let ret = [false, false, false, false, false];
    let pillars = ["GER", "GEQ", "GET", "GEH", "GES"];
    let moduleState = this.state.modsOnCalendar;
    let slicedMods = [];
    for (let i = 0; i < moduleState.length; i++) {
      let str = moduleState[i].moduleCode; // moduleState is an array of objects not an array of strings!!!!
      slicedMods.push(str.slice(0, 3));
    }
    let GEModuleList = [];
    for (let i = 0; i < pillars.length; i++) {
      const index = slicedMods.indexOf(pillars[i]);
      if (index > -1) {
        ret[i] = true;
        GEModuleList.push(moduleState[index]);
        moduleState.splice(index, 1);
        slicedMods.splice(index, 1);
      }
      complete = complete && ret[i];
    }
    this.setState({
      ULR: {
        modules: GEModuleList,
        isCompleted: complete,
      },
      modsOnCalendar: moduleState,
    });
  };

  checkUE = () => {
    let moduleState = this.state.modsOnCalendar;
    let modData = this.props.calendarData.forEach((element) =>
      element.map((mod) => mod.modData)
    );
    let counter = 0;
    console.log(modData);
    moduleState.forEach((element) => {
      let index = modData
        .map((mod) => mod.moduleCode)
        .indexOf(element.moduleCode);
      counter += modData[index].moduleCredit;
    });
    const complete = counter >= 32 ? true : false;
    this.setState({
      UE: {
        noMCs: counter,
        modules: moduleState,
        isCompleted: complete,
      },
    });
  };
  checkBreathAndDepth = () => {
    let focusArea = {
      primary: false,
      electives: false,
    };

    // left to right: CS3203, CS3216, CS3217, CS3281, CS3282
    let teamProject = [false, false, false, false, false];
    let i = 0;
    FieldModules.teamProject.forEach((element) => {
      teamProject[i] =
        teamProject[i] || this.state.modsOnCalendar.includes(element);
      i++;
    });
  };

  handleClick = () => {
    const data = modsOnCalendarInit(this.props.calendarData);
    this.setState(
      {
        modsOnCalendar: data,
      },
      () => {
        this.checkF_IT_M();
        this.checkScience();
        this.checkULR();
        this.checkUE();
        console.log(
          "State after finished executing all the checks:",
          this.state
        );
      }
    );
  };

  render() {
    return (
      <>
        <div>Graduation Requirement Check</div>
        <button onClick={this.handleClick}>test</button>
      </>
    );
  }
}

export default GraduationCheck;
