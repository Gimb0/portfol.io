import React from 'react';
import styled from 'styled-components';
import Title from './../Components/js/Title';
import './../Components/css/form.css';
const GridWrapper = styled.div`
  margin-top: 1em;
  margin-left: 275px;
  margin-right: 6em;
`;

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: "",
            hasErrors: false,
            usernameError: null,
            passwordError: null,
        }
    }

    async login(event) {
        event.preventDefault();
        var successfulLogin = false;
        var successfulValidation = true;
        this.setState({ usernameError: null, passwordError: null });
        //validate username
        if (event.target.username.value == '') {
            var usernameError = "Can't have null username";
            this.setState({ usernameError: usernameError, hasErrors: true });
            successfulValidation = false;
        }
        if (event.target.password.value == '') {
            var passwordError = "Can't have null password";
            this.setState({ passwordError: passwordError, hasErrors: true });
            successfulValidation = false;
        }
        // don't need to define the full path as a proxy is configured in package.json

        if (successfulValidation) {
            fetch("/login", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "username": event.target.username.value,
                    "password": event.target.password.value
                })
            })
                .then(resp => {
                    if (resp.ok) {
                        successfulLogin = true;
                    }
                    return resp.json()
                })
                .then(body => {
                    if (!successfulLogin) {
                        var error = body.message;
                        this.setState({ errors: error, hasErrors: true });
                    } else {
                        sessionStorage.setItem("token", "Bearer " + body.jwtToken);
                        window.location.assign('/dashboard');
                    }
                });
        }
    }

    render() {
        var serverMessage = null;
        var usernameMessage = null;
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
                <Title pageTitle="Login" />

                <div className="containter-login100">
                    <div className="wrap-login100">
                        <div className="errorMessage">{serverMessage}</div>
                        <form className="login100-form" onSubmit={(e) => this.login(e)}>
                            <div className="errorMessage">{usernameMessage}</div>
                            <div className="wrap-input100">
                                <input className="input100" name="username" type="text" placeholder="Enter your username" />
                            </div>
                            <div className="errorMessage">{passwordMessage}</div>
                            <div className="wrap-input100">
                                <input className="input100" name="password" type="password" placeholder="Enter your password" />
                            </div>
                            <div className="container-login100-form-btn">
                                <input className="login100-form-btn" type="submit" value="Login" />
                            </div>
                        </form>

                    </div>
                </div>



            </GridWrapper>

        )
    }
}

export default LoginForm;