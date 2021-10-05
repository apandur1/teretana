import React, { useEffect, useState } from "react";
import Admin from "./admin";
import "./App.css";
import User from "./user";
import Trener from "./trener";

function LoggedUser() {
  const [user, setUser] = useState("");
  const [datumIsteka, setDatumIsteka] = useState(new Date());
  const [datumPlacanja, setDatumPlacanja] = useState(new Date());
  let danas = new Date();

  useEffect(() => {
    dajUseraAjax();
    dajClanarinu();
  }, []);

  useEffect(() => {}, [datumIsteka, datumPlacanja]);

  function dajUseraAjax() {
    const dajUseraAjax = new XMLHttpRequest();
    dajUseraAjax.onreadystatechange = function () {
      if (dajUseraAjax.readyState === 4 && dajUseraAjax.status === 200) {
        let osoba = JSON.parse(dajUseraAjax.response);
        setUser(osoba.ime + " " + osoba.prezime);
      } else if (dajUseraAjax.readyState === 4 && dajUseraAjax.status === 404)
        console.log("Greska");
    };
    dajUseraAjax.open(
      "GET",
      "http://127.0.0.1:3000/osoba/" + localStorage.getItem("user")
    );
    dajUseraAjax.setRequestHeader(
      "Content-Type",
      "application/json;charset=UTF-8"
    );
    dajUseraAjax.send(JSON.stringify());
  }

  function dajClanarinu() {
    const dajClanarinuAjax = new XMLHttpRequest();
    dajClanarinuAjax.onreadystatechange = function () {
      if (
        dajClanarinuAjax.readyState === 4 &&
        dajClanarinuAjax.status === 200
      ) {
        let clanarina1 = JSON.parse(dajClanarinuAjax.response);
        let placanje = new Date(clanarina1.datum_placanja);
        let istek = new Date(clanarina1.datum_isteka);
        console.log(istek);
        setDatumPlacanja(placanje);
        setDatumIsteka(istek);
      } else if (
        dajClanarinuAjax.readyState === 4 &&
        dajClanarinuAjax.status === 404
      )
        console.log("Greska");
    };
    dajClanarinuAjax.open(
      "GET",
      "http://127.0.0.1:3000/clanarina/" + localStorage.getItem("user")
    );
    dajClanarinuAjax.setRequestHeader(
      "Content-Type",
      "application/json;charset=UTF-8"
    );
    dajClanarinuAjax.send(JSON.stringify());
  }

  return (
    <div className="tijelo container col-8 offset-2 justify-content-center">
      <div className="row justify-content-center">
        <h1 id="naziv">Teretana</h1>
      </div>
      <div className="row gx-5 justify-content-center">
        <h1>Dobrodošao {user}</h1>
      </div>
      {localStorage.getItem("user") == 1 && <Admin datum={datumIsteka} />}
      {localStorage.getItem("user") > 1 &&
        localStorage.getItem("user") < 100 && <Trener datum={datumIsteka} />}
      {localStorage.getItem("user") >= 100 && <User datum={datumIsteka} />}
    </div>
  );
}

export default LoggedUser;
