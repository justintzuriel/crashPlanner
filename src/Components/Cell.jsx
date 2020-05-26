import React, { Component } from "react";

class Cell extends Component {
  state = {
    // moduleCode: null,
    // semester: null,
  };

  render() {
    return (
      <button className="modules" onClick={() => console.log("yes")}>
        test
      </button>
    );
  }
}

export default Cell;
