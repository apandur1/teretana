import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Contact from "./contact";
import Home from "./home";
import Login from "./login";
import Signup from "./signup";
import HomeUser from "./homeUser";
import LoggedUser from "./loggedUser";
import LoggedBar from "./loggedBar";
import Admin from "./admin";
import Trener from "./trener";

function App() {
  let putanja = window.location.pathname;

  let barKod = "";

  let broj = 0;
  if (putanja === "/") broj = 1;
  else if (putanja === "/contact") broj = 2;
  else if (putanja === "/login") broj = 3;
  else if (putanja === "/signup") broj = 4;

  if (
    putanja === "/loggedUser" ||
    putanja === "/admin" ||
    putanja === "/trener"
  ) {
    barKod = <LoggedBar />;
  } else barKod = <NavBar broj={broj}></NavBar>;

  return (
    <BrowserRouter>
      <div id="pozadina">
        {barKod}
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/signup" component={Signup}></Route>
          <Route path="/userhome" component={HomeUser}></Route>
          <Route path="/loggedUser" component={LoggedUser}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
