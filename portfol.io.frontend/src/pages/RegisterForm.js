import React from 'react';
import styled from 'styled-components';
import Title from '../Components/js/Title';
import './../Components/css/form.css';
const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 275px;
  margin-right: 6em;
`;

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: "",
            hasErrors: false,
            usernameError: null,
            emailError: null,
            passwordError: null,
        }
    }

    async register(event) {
        event.preventDefault();
        var successfulRegister = false;
        var successfulValidation = true;
        this.setState({ usernameError: null, emailError: null, passwordError: null });
        //validate username
        if (event.target.username.value == '') {
            var usernameError = "Can't have null username";
            this.setState({ usernameError: usernameError, hasErrors: true });
            successfulValidation = false;
        }
        if (event.target.email.value == '') {
            var emailError = "Can't have null email";
            this.setState({ emailError: emailError, hasErrors: true });
            successfulValidation = false;
        }
        if (event.target.password.value == '') {
            var passwordError = "Can't have null password";
            this.setState({ passwordError: passwordError, hasErrors: true });
            successfulValidation = false;
        }

        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.com)+$/;
        console.log(mailformat.test(event.target.email.value));
        if(!mailformat.test(event.target.email.value)){
            var emailError = "Incorrect Email Format";
            this.setState({ emailError: emailError, hasErrors: true });
            successfulValidation = false;
        }


        if (successfulValidation) {
            fetch("/register", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "username": event.target.username.value,
                    "email": event.target.email.value,
                    "password": event.target.password.value
                })
            })
                .then(resp => {
                    if (resp.ok) {
                        successfulRegister = true;
                        window.location.assign('/login');
                    } else {
                        return resp.json()
                        .then(body => {
                            if (!successfulRegister) {
                                var error = body.message;
                                this.setState({ errors: error, hasErrors: true });
                            }
                        });
                    }
                });
        }

        // don't need to define the full path as a proxy is configured in package.json

    }


    render() {
        var serverMessage = null;
        var usernameMessage = null;
        var emailMessage = null;
        var passwordMessage = null;
        if (this.state.hasErrors) {
            if (this.state.errors != "") {
                serverMessage = (
                    <div>
                        <p>{this.state.errors}</p>
                    </div>
                )
            }
            if (this.state.usernameError != null) {
                usernameMessage = (
                    <div>
                        <p>{this.state.usernameError}</p>
                    </div>
                )
            }
            if (this.state.emailError != null) {
                emailMessage = (
                    <div>
                        <p>{this.state.emailError}</p>
                    </div>
                )
            }
            if (this.state.passwordError != null) {
                passwordMessage = (
                    <div>
                        <p>{this.state.passwordError}</p>
                    </div>
                )
            }
        }
        return (
            <GridWrapper>
                <Title pageTitle="Register" />
                <div className="containter-login100">
                    <div className="wrap-login100">
                        <div className="errorMessage">{serverMessage}</div>
                        <form className="login100-form" onSubmit={(e) => this.register(e)}>
                            <div className="errorMessage">{usernameMessage}</div>
                            <div className="wrap-input100">
                                <input className="input100" name="username" type="text" placeholder="Enter your username" />
                            </div>
                            <div className="errorMessage">{emailMessage}</div>
                            <div className="wrap-input100">
                                <input className="input100" name="email" type="text" placeholder="Enter your email" />
                            </div>
                            <div className="errorMessage">{passwordMessage}</div>
                            <div className="wrap-input100">
                                <input className="input100" name="password" type="password" placeholder="Enter your password" />
                            </div>
                            <div className="container-login100-form-btn">
                                <input className="login100-form-btn" type="submit" value="Register" />
                            </div>
                        </form>

                    </div>
                </div>
            </GridWrapper>

        )
    }
}

export default RegisterForm;