import React from "react";
import "./App.css"

function Login() {
    return (

        <div className="tijelo container col-8 offset-2 justify-content-center">
            <h3>Popunite formu</h3>
            <div className="row gx-5 justify-content-center">
                <form action="http://127.0.0.1:3000" method="POST">
                    <div class="mb-3">
                        <label for="InputCard" class="form-label">Broj kartice</label>
                        <input type="text" class="form-control" id="InputCard" aria-describedby="emailHelp"></input>
                    </div>
                    <div className="row gx-5 justify-content-center">
                        <div class="mb-3">
                            <label for="InputPassword2" class="form-label">Password</label>
                            <input type="password" class="form-control" id="InputPassword2" aria-describedby="emailHelp"></input>
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

export default Login;