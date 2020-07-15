import React, { Component } from "react";

// data from props -> list of modules in the timetable

// ULR -> modules start with GEXXXXX
// UE -> count the number of MCs ( >= 32)
// foundation, ITProfessionalism, Math -> .includes(modules)
// science -> starts with 'CN', 'DSA', 'FST', 'LSM', 'MA', 'PR', 'PHS', 'PC', 'QF', 'ST'

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
class GraduationCheck extends Component {
  checklist = {
    ULR: false,
    UE: false,
    foundation: false,
    breadthAndDepth: false,
    ITProfessionalism: false,
    mathAndScience: false,
  };
}

export default GraduationCheck;
