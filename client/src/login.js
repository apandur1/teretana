import React, { useState } from "react";
import "./App.css";

function Login() {
  const [kartica, setKartica] = useState({});
  const [password, setPassword] = useState({});

  function loginKarticaHandler(event) {
    setKartica(event.target.value);
  }

  function loginPasswordHandler(event) {
    setPassword(event.target.value);
  }

  function loginButtonHandler(event) {
    event.preventDefault()
    const dajUseraAjax = new XMLHttpRequest();
    dajUseraAjax.onreadystatechange = function () {
      if (dajUseraAjax.readyState === 4 && dajUseraAjax.status === 200) {
        let osoba = JSON.parse(dajUseraAjax.response);
        if(osoba) {
            window.location.pathname = "/loggedUser"
        }
      } else if (dajUseraAjax.readyState === 4 && dajUseraAjax.status === 404)
        console.log("Greska");
    };
    dajUseraAjax.open(
      "GET",
      "http://127.0.0.1:3000/osoba/" + kartica + "/" + password
    );
    dajUseraAjax.setRequestHeader(
      "Content-Type",
      "application/json;charset=UTF-8"
    );
    dajUseraAjax.send(JSON.stringify());
  }

  return (
    <div className="tijelo container col-8 offset-2 justify-content-center">
      <h3>Popunite formu</h3>
      <div className="row gx-5 justify-content-center">
        <form>
          <div className="mb-3">
            <label htmlFor="InputCard" className="form-label">
              Broj kartice
            </label>
            <input
              type="text"
              className="form-control"
              id="InputCard"
              onChange={loginKarticaHandler}
            ></input>
          </div>
          <div className="row gx-5 justify-content-center">
            <div className="mb-3">
              <label htmlFor="InputPassword2" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="InputPassword2"
                onChange={loginPasswordHandler}
              ></input>
            </div>
          </div>
          <div className="mb-3">
            <button
              onClick={loginButtonHandler}
              className="btn btn-primary"
              type="submit"
            >
              Submit form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
