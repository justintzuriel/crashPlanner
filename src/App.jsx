import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Components/Home/Login";
import Home from "./Components/Home/Home";
import SignUp from "./Components/Home/SignUp";
import { AuthProvider } from "./Auth"; // to provide all components wrapped inside <AuthProvider> access to current user through context API

function App() {
  return (
    <AuthProvider>
      <Router>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route path="/" component={Home} />
      </Router>
    </AuthProvider>
  );
}

export default App;
