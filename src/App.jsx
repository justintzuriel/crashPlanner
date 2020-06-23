import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Components/Home/Login";
import Home from "./Components/Home/Home";
import SignUp from "./Components/Home/SignUp";
function App() {
  return (
    <Router>
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={SignUp} />
      <Route path="/" component={Home} />
    </Router>
  );
}

export default App;
