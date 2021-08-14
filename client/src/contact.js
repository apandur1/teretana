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
                        <div class="mb-3">
                            <label for="InputFirstName" class="form-label">First name</label>
                            <input type="text" class="form-control" id="InputFirstName" aria-describedby="emailHelp"></input>
                        </div>
                        <div class="mb-3">
                            <label for="InputLastName" class="form-label">Last name</label>
                            <input type="text" class="form-control" id="InputLastName" aria-describedby="emailHelp"></input>
                        </div>
                    </div>
                    <div class="mb-3 razmak">
                        <label for="InputEmail1" class="form-label">Email</label>
                        <input type="email" class="form-control" id="InputEmail1" aria-describedby="emailHelp"></input>
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="row gx-5 justify-content-center razmak">
                        <div class="mb-3">
                            <label for="InputTextarea" class="form-label">What you want from us?</label>
                            <textarea class="form-control letter" id="InputTextarea" aria-describedby="emailHelp"></textarea>
                        </div>
                    </div>
                    <div class="mb-3">
                        <button class="btn btn-primary" type="submit" disabled>Submit form</button>
                    </div>
                </form>

            </div>
        </div>
    );
}

export default Contact;
