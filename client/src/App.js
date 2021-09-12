import React from "react";
import "./App.css"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import NavBar from "./NavBar";
import Contact from "./contact";
import Home from "./home";
import Login from "./login";
import Signup from "./signup";
import HomeUser from "./homeUser";

function App() {
  let putanja = window.location.pathname
  let broj = 0
  if (putanja === "/")
    broj = 1
  else if (putanja === "/contact")
    broj = 2
  else if (putanja === "/login")
    broj = 3
  else if (putanja === "/signup")
    broj = 4
  return (
    <BrowserRouter>
      <div id="pozadina">
        <NavBar broj={broj}></NavBar>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route path='/contact' component={Contact}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/signup" component={Signup}></Route>
          <Route path="/userhome" component={HomeUser}></Route> 
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
