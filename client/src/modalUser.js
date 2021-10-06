import React, { useEffect, useState } from "react";

function ModalUser(props) {
  //   const [show, setShow] = useState(false);

  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);
  const [clanarina, setClanarina] = useState({
    id: "",
    datum_placanja: new Date(),
    datum_isteka: new Date(),
  });
  const [obnova, setObnova] = useState("")

  useEffect(() => {
    fetch("http://127.0.0.1:3000/clanarina/" + props.clan.ClanarinaId)
      .then((res) => res.json())
      .then((result) => {
        setClanarina({
          id: result.id,
          datum_placanja: new Date(result.datum_placanja),
          datum_isteka: new Date(result.datum_isteka),
        });
      })
      .catch((d) => console.log(d));
  }, [props.clan.ClanarinaId]);

  function pretvoriDatum(datum) {
    return (
      datum.getDate() + "." + (datum.getMonth() + 1) + "." + datum.getFullYear()
    );
  }

  function obnoviClanarinu() {
    let danas = new Date()
    let zaMjesec = new Date()
    zaMjesec.setDate(zaMjesec.getDate() + 30)
    const obnoviClanarinuAjax = new XMLHttpRequest();
    obnoviClanarinuAjax.onreadystatechange = function () {
      if (
        obnoviClanarinuAjax.readyState === 4 &&
        obnoviClanarinuAjax.status === 200
      ) {
        setObnova("Obnovili ste članarinu!")
        setClanarina({
          id: props.clan.ClanarinaId,
          datum_placanja: danas,
          datum_isteka: zaMjesec
        })
      } else if (
        obnoviClanarinuAjax.readyState === 4 &&
        obnoviClanarinuAjax.status === 404
      )
        console.log("Greska");
    };
    obnoviClanarinuAjax.open("PUT", "http://127.0.0.1:3000/clanarina/"+props.clan.ClanarinaId);
    obnoviClanarinuAjax.setRequestHeader(
      "Content-Type",
      "application/json;charset=UTF-8"
    );
    obnoviClanarinuAjax.send(
      JSON.stringify({
        id: props.clan.ClanarinaId,
        datum_placanja: danas,
        datum_isteka: zaMjesec
      })
    );
  }

  return (
    <div>
      <div className="modalPozadina"></div>
      <div className="modalUser">
        <header>
          <h2>Edit user</h2>
        </header>
        <div>
          {props.clan.ime} {props.clan.prezime}
        </div>
        Datum plaćanja:{" "}
        <div className="bold">{pretvoriDatum(clanarina.datum_placanja)}</div>
        Datum isteka:{" "}
        <div className="bold">{pretvoriDatum(clanarina.datum_isteka)}</div>
        {obnova}
        <footer>
          <button onClick={obnoviClanarinu}>Obnovi članarinu</button>
          <button onClick={props.onCancelButton}>Cancel</button>
        </footer>
      </div>
    </div>
  );
}

export default ModalUser;
