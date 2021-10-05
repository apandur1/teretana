import React, { useState } from "react";
import "./App.css";
import { send } from "emailjs-com";

function Contact() {
  const [toSend, setToSend] = useState({
    first_name: "",
    last_name: "",
    to_name: "Amel",
    message: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      "service_uv39yrk",
      "template_m556t24",
      toSend,
      "user_x9ot8SGU9zQiAGoU945Z7"
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
    setToSend({
      first_name: "",
      last_name: "",
      to_name: "Amel",
      message: "",
      reply_to: "",
    });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  //email
  //   <div className="mb-3 razmak">
  //     <label htmlFor="InputEmail1" className="form-label">
  //       Email
  //     </label>
  //     <input
  //       type="email"
  //       className="form-control"
  //       id="InputEmail1"
  //       onChange={handleChange}
  //       required
  //     ></input>
  //     <div id="emailHelp" className="form-text">
  //       We'll never share your email with anyone else.
  //     </div>
  //   </div>;

  return (
    <div className="tijelo container col-8 offset-2 justify-content-center">
      <div className="row justify-content-center">
        <h2 className="start">
          Zelite nas kontaktirati? Popunite sljedecu formu
        </h2>
      </div>
      <div className="row gx-5 justify-content-center">
        <form onSubmit={onSubmit}>
          <div className="row gx-5 justify-content-center razmak">
            <div className="mb-3">
              <label htmlFor="InputFirstName" className="form-label">
                First name
              </label>
              <input
                type="text"
                className="form-control"
                id="InputFirstName"
                name="first_name"
                value={toSend.first_name}
                onChange={handleChange}
                required
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="InputLastName" className="form-label">
                Last name
              </label>
              <input
                type="text"
                className="form-control"
                id="InputLastName"
                name="last_name"
                value={toSend.last_name}
                onChange={handleChange}
                required
              ></input>
            </div>
          </div>
          <div className="row gx-5 justify-content-center razmak">
            <div className="mb-3">
              <label htmlFor="InputTextarea" className="form-label">
                What you want from us?
              </label>
              <textarea
                className="form-control letter"
                id="InputTextarea"
                name="message"
                value={toSend.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
          </div>
          <div className="mb-3">
            <button className="btn btn-primary" type="submit">
              Submit form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
