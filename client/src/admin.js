import React, { useState, useEffect } from "react";
import ModalUser from "./modalUser";

function Admin() {
  const [clanovi, setClanovi] = useState([
    {
      id: "",
      ime: "",
      prezime: "",
      email: "",
      sifra: "",
      student: "",
      spol: "",
      trener: "",
      ClanarinaId: "",
    },
  ]);

  useEffect(() => {
    dajOsobe();
    // clanovi.map((element) => {

    // })
  }, []);

  function dajOsobe() {
    const dajOsobeAjax = new XMLHttpRequest();
    dajOsobeAjax.onreadystatechange = function () {
      if (dajOsobeAjax.readyState === 4 && dajOsobeAjax.status === 200) {
        let osobe = JSON.parse(dajOsobeAjax.response);
        // osobe.map(element => {
        //     let novi = {}
        //     novi['ime'] = element.ime
        //     novi['prezime'] = element.prezime
        //     novi['clanarina'] = element.ClanarinaId
        //     return novi
        // })
        setClanovi(osobe);
      } else if (dajOsobeAjax.readyState === 4 && dajOsobeAjax.status === 404)
        console.log("Greska");
    };
    dajOsobeAjax.open("GET", "http://127.0.0.1:3000/osobe");
    dajOsobeAjax.setRequestHeader(
      "Content-Type",
      "application/json;charset=UTF-8"
    );
    dajOsobeAjax.send(JSON.stringify());
  }

  const [modalKod, setModalKod] = useState("");

  function obrisiModal() {
    setModalKod("");
  }

  function otvoriModal(element) {
    setModalKod(
      <ModalUser clan={element} onCancelButton={obrisiModal}></ModalUser>
    );
  }

  return (
    <div className="container justify-content-center">
      {modalKod}
      <ul className="listaClanovaTeretane">
        {clanovi
          .sort((a, b) => {
            if (a.ClanarinaId > b.ClanarinaId) return 1;
            else if (a.ClanarinaId < b.ClanarinaId) return -1;
            else return 0;
          })
          .map((element) => {
            return (
              <li
                key={element.ClanarinaId}
                className="clanTeretane"
                onClick={() => otvoriModal(element)}
              >
                <div>{element.ClanarinaId}</div>
                <div>{element.ime}</div>
                <div>{element.prezime}</div>
                <br />
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Admin;
