import React from "react";
import "./App.css";
import ronnie from "./images/ronnie.jpeg";

function Home() {
  return (
    <div className="tijelo container col-8 offset-2 justify-content-center">
      <div className="row justify-content-center">
        <h1 id="naziv">Teretana</h1>
      </div>
      <div className="row gx-5 justify-content-center">
        <div className="card">
          <img src={ronnie} className="card-img-top" alt="ronnie"></img>
          <div className="card-body">
            <h2 className="card-title">Zašto baš mi?</h2>
            <p className="card-text">
              Zato što uz pomoć naših vrhunskih trenera možete doći do tijela
              koje želite. Dobra atmosfera i intenzivni treninzi su
              zagarantovani.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
