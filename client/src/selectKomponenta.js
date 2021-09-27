import React from "react";
import "./App.css";

function SelectKomponenta() {
  function dajNizClanarina() {
    let array = [];
    const dajClanarine = new XMLHttpRequest();
    dajClanarine.onreadystatechange = function () {
      if (dajClanarine.readyState === 4 && dajClanarine.status === 200) {
        let osobe = JSON.parse(dajClanarine.response);
        osobe.forEach((element) => {
          array.push(+(element.ClanarinaId));
        });
      } else if (dajClanarine.readyState === 4 && dajClanarine.status === 404)
        console.log("Greska");
    };
    dajClanarine.open("GET", "http://127.0.0.1:3000/osobe");
    dajClanarine.send();
    return array;
  }

  let niz = [];
  let pomocni = dajNizClanarina()
  console.log(pomocni)

  for (let i = 1; i <= 999; i++) {
    //if (!pomocni.includes(i)) {
      niz.push(i);
    //}
  }
  let razlika = niz.filter(element => pomocni.includes(element))
  
  let opcija = function (x) {
    return (
      <option value={x} key={x}>
        {x}
      </option>
    );
  };
  
  return <select>{razlika.map(opcija)}</select>;
}

export default SelectKomponenta;
