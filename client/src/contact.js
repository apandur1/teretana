import React from "react";
import "./App.css"

function Contact() {
    return (
        <div className="tijelo container col-8 offset-2 justify-content-center">
            <div className="row justify-content-center">
                <h2 className="start">Zelite nas kontaktirati? Popunite sljedecu formu</h2>
            </div>
            <div className="row gx-5 justify-content-center">
                <form action="http://127.0.0.1:3000" method="POST">
                    <div className="row gx-5 justify-content-center razmak">
                        <div className="mb-3">
                            <label htmlFor="InputFirstName" className="form-label">First name</label>
                            <input type="text" className="form-control" id="InputFirstName" required></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="InputLastName" className="form-label">Last name</label>
                            <input type="text" className="form-control" id="InputLastName" required></input>
                        </div>
                    </div>
                    <div className="mb-3 razmak">
                        <label htmlFor="InputEmail1" className="form-label">Email</label>
                        <input type="email" className="form-control" id="InputEmail1" required></input>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="row gx-5 justify-content-center razmak">
                        <div className="mb-3">
                            <label htmlFor="InputTextarea" className="form-label">What you want from us?</label>
                            <textarea className="form-control letter" id="InputTextarea" required></textarea>
                        </div>
                    </div>
                    <div className="mb-3">
                        <button className="btn btn-primary" type="submit" disabled>Submit form</button>
                    </div>
                </form>

            </div>
        </div>
    );
}

export default Contact;
