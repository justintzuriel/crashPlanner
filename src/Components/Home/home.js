import React, { Component } from "react";
import Fire from "../../firebase";
import Table from "./Table";
import Navbar from "./Navbar";
class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Table />
      </div>
    );
  }
}

export default Home;
