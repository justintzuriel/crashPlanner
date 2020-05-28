import React from "react";
import "./App.css";
import Table from "./Components/Home/Table";
import Navbar from "./Components/Home/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Login/login";
import Home from "./Components/Home/home";
import SignUp from "./Components/SignUp/signup";
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </div>
      </Router>
    </div>
  );
}

export default App;
