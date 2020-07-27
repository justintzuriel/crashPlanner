import React, { Component } from "react";
import styled from "styled-components";
import * as FieldModules from "../../Constants/FieldModules";

// data from props -> list of modules in the timetable and noMcs

// ULR -> modules start with GEXXXXX
// UE -> count the number of MCs ( >= 160)
// foundation, ITProfessionalism, Math -> for each element, .includes(modules)

// science -> check list

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
const Instructions = styled.div`
  text-align: left;
  font-size: 15.5px;
  font-weight: normal;
  padding: 10px 0px 10px 0px;
`;

const List = styled.ul`
  padding-left: 20px;
  font-size: 13.5px;
  font-weight: normal;
`;

const modsOnCalendarInit = (data) => {
  const arr = [];
  for (let col = 0; col < 8; col++) {
    for (let row = 0; row < 8; row++) {
      // check if data[col][row].mod is an empty object
      if (data[col][row].mod.isEmpty !== true) {
        let modData = data[col][row].mod;
        data[col][row].modData.then((mod) => {
          modData = { ...modData, moduleCredit: mod.moduleCredit };
          arr.push(modData);
        });
      }
    }
  }
  return arr;
};
class GraduationCheck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      immutableData: [],
      modsOnCalendar: [],
      UE: {
        modules: [],
        noMcs: 0,
        isCompleted: false,
      },
      ULR: {
        modules: [],
        isCompleted: false,
      },
      breadthAndDepth: {
        primaries3: [],
        primaries4: [],
        electives3: [],
        electives4: [],
        independentProject: [],
        teamProject: [],
        noMcs: 0,
        isComleted: false,
      },
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
      let sectionModuleList = [];
      currentSection.forEach((element) => {
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
      console.log("State after finished executing all the checks:", this.state)
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
      let str = moduleState[i].moduleCode;
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
    let moduleState = this.state.modsOnCalendar; // modules which are not counted as foundation, math, science, etc (all sliced by the other functions)
    let counter = 0;
    moduleState.forEach((element) => {
      const index = moduleState
        .map((mod) => mod.moduleCode)
        .indexOf(element.moduleCode);
      if (index > -1) counter += Number(moduleState[index].moduleCredit);
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
    // focus area
    const focusArea = this.props.focusArea;
    let moduleState = this.state.modsOnCalendar;
    let mcCounter = 0;

    const specsModules = FieldModules[focusArea + "Specs"];
    let focusAreaMods = {
      primaries3: [],
      primaries4: [],
      electives3: [],
      electives4: [],
    };

    let sections = ["primaries3", "primaries4", "electives3", "electives4"];
    sections.forEach((item) => {
      specsModules[item].forEach((faMod) => {
        const index = moduleState.map((mod) => mod.moduleCode).indexOf(faMod);
        if (index > -1) {
          focusAreaMods[item].push(moduleState[index]);
          mcCounter += Number(moduleState[index].moduleCredit);
          moduleState.splice(index, 1);
        }
      });
    });

    const completedFocusArea =
      focusAreaMods.primaries3.length + focusAreaMods.primaries4.length >= 3 &&
      focusAreaMods.primaries4.length >= 1;

    //independent project
    let independentProjectModules = [];
    let independentMc = 0;
    FieldModules.independentProject.forEach((element) => {
      const index = this.state.modsOnCalendar
        .map((mod) => mod.moduleCode)
        .indexOf(element);
      if (index > -1) {
        if (
          Number(independentMc) + Number(moduleState[index].moduleCredit) <=
          12
        ) {
          independentProjectModules.push(moduleState[index]);
          independentMc += Number(moduleState[index].moduleCredit);
          mcCounter += Number(moduleState[index].moduleCredit);
        }
      }
    });

    //team project
    // left to right: CS3203, CS3216, CS3217, CS3281, CS3282
    let teamProject = [false, false, false, false, false];
    let teamProjectModules = [];
    let i = 0;
    FieldModules.teamProject.forEach((element) => {
      const index = this.state.modsOnCalendar
        .map((mod) => mod.moduleCode)
        .indexOf(element);
      if (index > -1) {
        teamProject[i] = true;
        teamProjectModules.push(moduleState[index]);
        mcCounter += Number(moduleState[index].moduleCredit);
        moduleState.splice(index, 1);
      }
      i++;
    });
    const completedTeamProject =
      teamProject[0] ||
      (teamProject[1] && teamProject[2]) ||
      (teamProject[3] && teamProject[4]);

    const completedBreadthAndDepth =
      completedTeamProject && completedFocusArea && mcCounter >= 28;

    // final update
    this.setState({
      modsOnCalendar: moduleState,
      breadthAndDepth: {
        independentProject: independentProjectModules,
        teamProject: teamProjectModules,
        primaries3: focusAreaMods.primaries3,
        primaries4: focusAreaMods.primaries4,
        electives3: focusAreaMods.electives3,
        electives4: focusAreaMods.electives4,
        noMcs: mcCounter,
        isComleted: completedBreadthAndDepth,
      },
    });
  };

  handleClick = () => {
    if (this.props.focusArea === null || this.props.focusArea === "empty") {
      alert("Please select your focus area!");
      return;
    }
    //edit
    const data = modsOnCalendarInit(this.props.calendarData);
    //edit
    // const data = this.state.immutableData;
    this.setState({ modsOnCalendar: data }, () => {
      this.checkF_IT_M();
      this.checkScience();
      this.checkULR();
      this.checkBreathAndDepth();
      this.checkUE();
    });
    const update = modsOnCalendarInit(this.props.calendarData);
    this.setState({ immutableData: update });
  };

  //edit
  // componentDidUpdate(prevProps) {
  //   if (this.props.noMcs !== prevProps.noMcs) {
  //     const data = modsOnCalendarInit(this.props.calendarData);
  //     this.setState({
  //       immutableData: data,
  //     });
  //   }
  // }
  //edit
  render() {
    const completed =
      this.state.UE.isCompleted &&
      this.state.math.isCompleted &&
      this.state.science.isCompleted &&
      this.state.ITProfessionalism.isCompleted &&
      this.state.foundation.isCompleted &&
      this.state.ULR.isCompleted &&
      this.state.breadthAndDepth.isComleted;
    return (
      <>
        <div>Graduation Requirement Check</div>
        <div>
          {completed && (
            <Instructions>You've completed all the requirements!</Instructions>
          )}
          {!completed && (
            <Instructions>
              You have not completed the following areas:
              <List>
                {!this.state.UE.isCompleted && <li>UE</li>}
                {!this.state.math.isCompleted && <li>Math</li>}
                {!this.state.science.isCompleted && <li>Science</li>}
                {!this.state.ITProfessionalism.isCompleted && (
                  <li>IT Professionalism</li>
                )}
                {!this.state.foundation.isCompleted && <li>Foundation</li>}
                {!this.state.ULR.isCompleted && <li>ULR</li>}
                {!this.state.breadthAndDepth.isComleted && <li>Focus Area</li>}
              </List>
            </Instructions>
          )}
        </div>
        <button onClick={this.handleClick} class="btn btn-success">
          Check your modules!
        </button>
      </>
    );
  }
}

export default GraduationCheck;
