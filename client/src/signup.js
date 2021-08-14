import React from "react";
import "./App.css"

function Signup() {
    return (

        <div className="tijelo container col-8 offset-2 justify-content-center">
            <h3>Popunite formu</h3>
            <div className="row gx-5 justify-content-center">
                <form>
                    <div className="row gx-5 justify-content-center">
                        <div class="mb-3">
                            <label for="InputFirstName2" class="form-label">First name</label>
                            <input type="text" class="form-control" id="InputFirstName2" aria-describedby="emailHelp" required></input>
                            <div className="invalid-feedback">
                                Molimo Vas unesite ime
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="InputLastName2" class="form-label">Last name</label>
                            <input type="text" class="form-control" id="InputLastName2" aria-describedby="emailHelp" required></input>
                            <div className="invalid-feedback">
                                Molimo Vas unesite prezime
                            </div>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="InputEmail1" class="form-label">Email</label>
                        <input type="email" class="form-control" id="InputEmail1" aria-describedby="emailHelp"></input>
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="row gx-5 justify-content-center">
                        <div class="mb-3">
                            <label for="InputPassword" class="form-label">Password</label>
                            <input type="password" class="form-control" id="InputPassword" aria-describedby="emailHelp"></input>
                        </div>
                        <div class="mb-3">
                            <label for="InputConfirm" class="form-label">Confirm password</label>
                            <input type="password" class="form-control" id="InputConfirm" aria-describedby="emailHelp"></input>
                        </div>
                    </div>
                    <div class="mb-3">
                        <button class="btn btn-primary" type="submit">Submit form</button>
                    </div>
                </form>
            </div>
        </div>

    );
}

export default Signup;