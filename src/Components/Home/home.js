import React, { Component } from "react";
import Fire from "../../firebase";
import Table from "./Table";
import Navbar from "./Navbar";
import FetchData from "./FetchData";
class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <FetchData />
        <Table />
      </div>
    );
  }
}

export default Home;
