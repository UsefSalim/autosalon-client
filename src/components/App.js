import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./pages/header/NavBar";
import Routes from "./Routes";
import { ifLogedIn } from "../redux/ducks/authSlice";
import { useSelector, useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();
  // const { role, isAuthenticated } = useSelector(
  //   (state) => state.authentification
  // );
  useEffect(() => {
    dispatch(ifLogedIn());
  }, [dispatch]);
  return (
    <Router>
      <NavBar />
      <Routes />
    </Router>
  );
}

export default App;
