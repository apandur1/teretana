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

  function obnoviClanarinu() {}

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
        <footer>
          <button onClick={obnoviClanarinu}>Obnovi članarinu</button>
          <button onClick={props.onCancelButton}>Cancel</button>
        </footer>
      </div>
    </div>
  );
}

export default ModalUser;
