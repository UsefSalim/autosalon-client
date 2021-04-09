import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../components/pages/Home";
import Register from "../components/pages/Register";
import Login from "../components/pages/Login";
import Owner from "./pages/Owner";
import NavBar from "./pages/header/NavBar";
import Client from "./pages/Client";
function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/owner" component={Owner} />
        <Route exact path="/client" component={Client} />
      </Switch>
    </Router>
  );
}

export default App;
