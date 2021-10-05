import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function LoggedBar() {
  function refresh() {
    window.location.reload();
  }

  function ocistiLocalStorage() {
    localStorage.clear();
  }

  return (
    <nav className="topnav">
      <ul onClick={refresh}>
        <Link to="/loggedUser">
          <li className="active">Profil</li>
        </Link>
        <Link to="/login">
          <li className="desno" onClick={ocistiLocalStorage}>
            Log out
          </li>
        </Link>
      </ul>
    </nav>
  );
}

export default LoggedBar;
