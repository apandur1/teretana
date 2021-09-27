import { useEffect, useState } from "react";

function Kartica(props) {
  const [kartica, setKartica] = useState("");

  function dajNizClanarina() {
    // let array = [];
    let osobe;
    const dajClanarine = new XMLHttpRequest();
    dajClanarine.onreadystatechange = function () {
      if (dajClanarine.readyState === 4 && dajClanarine.status === 200) {
        osobe = JSON.parse(dajClanarine.response);
        // osobe.forEach((element) => {
        //   array.push(+element.ClanarinaId);
        // });
        //  for (let i in osobe) {
        //   array.push(osobe[i].ClanarinaId);
        // }
        if (!kartica) {
          setKartica(osobe + 1);
          props.dajClanarinu(osobe+1);
        }
        return osobe;
      } else if (dajClanarine.readyState === 4 && dajClanarine.status === 404)
        console.log("Greska");
    };
    dajClanarine.open("GET", "http://127.0.0.1:3000/maxClanarina");
    dajClanarine.send();
  }

  let max = dajNizClanarina();

  //   useEffect(() => {
  //     setKartica(max);
  //     console.log(kartica)
  //   }, [max, kartica]);

  return (
    <div>
      <label htmlFor="InputKartica" className="form-label">
        Broj kartice
      </label>
      <input
        name="kartica"
        type="text"
        className="form-control"
        id="InputKartica"
        value={kartica}
        disabled
      ></input>
    </div>
  );
}

export default Kartica;
