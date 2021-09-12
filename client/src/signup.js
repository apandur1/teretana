import React from "react";
import "./App.css"
import SelectKomponenta from "./selectKomponenta";

class Signup extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirm: "",
        student: "",
        spol: "",
        kartica: "",
        firstNameErr: "",
        lastNameErr: "",
        emailErr: "",
        passwordErr: "",
        confirmErr: "",
        studentErr: "",
        spolErr: "",
        karticaErr: ""
    }

    validate = () => {
        let firstNameErr = ""
        let lastNameErr = ""
        let emailErr = ""
        let passwordErr = ""
        let confirmErr = ""
        let studentErr = ""
        let spolErr = ""
        let karticaErr = ""

        if (this.state.firstName === "")
            firstNameErr = "Molimo Vas unesite ime"
        if (this.state.lastName === "")
            lastNameErr = "Molimo Vas unesite prezime"
        if (this.state.email === "" || !this.state.email.includes("@"))
            emailErr = "Molimo Vas unesite validan mail"
        if (this.state.password === "")
            passwordErr = "Molimo Vas unesite sifru"
        if (this.state.confirm === "")
            confirmErr = "Molimo Vas potvrdite sifru"
        else if (this.state.confirm !== this.state.password)
            confirmErr = "Niste dobro potvrdili sifru"
        if (!this.state.kartica)
            karticaErr = "Unesite broj kartice"
        /*if (!this.state.student)
            studentErr = "Molimo vas unesite da li ste student"*/
        if (!this.state.spol)
            spolErr = "Molimo vas unesite spol"

        if (firstNameErr || lastNameErr || emailErr || passwordErr || confirmErr || studentErr || spolErr || karticaErr) {
            this.setState({ firstNameErr, lastNameErr, emailErr, passwordErr, confirmErr, studentErr, spolErr, karticaErr })
            return false
        }
        return true
    }

    handleSubmit = event => {
        event.preventDefault()
        let isValide = this.validate()
        if (isValide) {
            /*for (let i = 0; i < 1000; i++) {
                const dodajUseraAjax = new XMLHttpRequest()
            dodajUseraAjax.onreadystatechange = function () {
                if (dodajUseraAjax.readyState === 4 && dodajUseraAjax.status === 200) {
                    
                }
                else if (dodajUseraAjax.readyState === 4 && dodajUseraAjax.status === 404)
                    console.log("Greska")
            }
            dodajUseraAjax.open("POST", "http://127.0.0.1:3000/clanarina")
            dodajUseraAjax.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            dodajUseraAjax.send(JSON.stringify({
                id: i
            }))
            }*/
            let student = "Ne"
            if (this.state.student)
                student = "Da"
            const dodajUseraAjax = new XMLHttpRequest()
            dodajUseraAjax.onreadystatechange = function () {
                if (dodajUseraAjax.readyState === 4 && dodajUseraAjax.status === 200) {
                    window.location.pathname = "/login"
                }
                else if (dodajUseraAjax.readyState === 4 && dodajUseraAjax.status === 404)
                    console.log("Greska")
            }
            dodajUseraAjax.open("POST", "http://127.0.0.1:3000/osoba")
            dodajUseraAjax.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            dodajUseraAjax.send(JSON.stringify({
                ime: this.state.firstName, prezime: this.state.lastName, email: this.state.email,
                sifra: this.state.password, student: student, spol: this.state.spol, trener: "Ne", ClanarinaId: this.state.kartica
            }))
        }
        else {
            console.log("Nije validno")
        }
    }

    handleChange = event => {
        let isCheckBox = event.target.type === "checkbox"
        this.setState({
            [event.target.name]: isCheckBox ? event.target.checked : event.target.value
        })
    }

    render() {
        return (
            <div className="tijelo container col-8 offset-2 justify-content-center">
                <h3>Popunite formu</h3>
                <div className="row gx-5 justify-content-center">
                    <form className="needs-validation" noValidate onSubmit={this.handleSubmit}>
                        <div className="row gx-5 justify-content-center">
                            <div className="mb-3 form-group has-validation">
                                <label htmlFor="InputFirstName2" className="form-label">First name</label>
                                <input name="firstName" onChange={this.handleChange} type="text" className="form-control" id="InputFirstName2" required></input>
                                <div className="greska">
                                    {this.state.firstNameErr}
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="InputLastName2" className="form-label">Last name</label>
                                <input name="lastName" onChange={this.handleChange} type="text" className="form-control" id="InputLastName2" required></input>
                                <div className="greska">
                                    {this.state.lastNameErr}
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="InputEmail1" className="form-label">Email</label>
                            <input name="email" type="email" onChange={this.handleChange} className="form-control" id="InputEmail1" required></input>
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            <div className="greska">
                                {this.state.emailErr}
                            </div>
                        </div>
                        <div className="row gx-5 justify-content-center">
                            <div className="mb-3">
                                <label htmlFor="InputPassword" className="form-label">Password</label>
                                <input name="password" onChange={this.handleChange} type="password" className="form-control" id="InputPassword" required></input>
                                <div className="greska">
                                    {this.state.passwordErr}
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="InputConfirm" className="form-label">Confirm password</label>
                                <input name="confirm" onChange={this.handleChange} type="password" className="form-control" id="InputConfirm" required></input>
                                <div className="greska">
                                    {this.state.confirmErr}
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="InputStudent" className="form-label">Student</label>
                            <input name="student" onChange={this.handleChange} type="checkBox" className="form-control" id="InputStudent" required></input>
                            <div className="greska">
                                {this.state.studentErr}
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="InputSpol" className="form-label">Spol</label>
                            <select name="spol" onChange={this.handleChange} type="password" className="form-control" id="InputSpol" required>
                                <option selected>Izaberite spol</option>
                                <option value="M">Male</option>
                                <option value="F">Female</option>
                            </select>
                            <div className="greska">
                                {this.state.spolErr}
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="InputKartica" className="form-label">Broj kartice</label>
                            <SelectKomponenta></SelectKomponenta>
                            <div className="greska">
                                {this.state.karticaErr}
                            </div>
                        </div>
                        <div className="mb-3">
                            <button className="btn btn-primary" type="submit">Submit form</button>
                        </div>
                    </form>
                </div>
            </div>

        );
    }
}

export default Signup;