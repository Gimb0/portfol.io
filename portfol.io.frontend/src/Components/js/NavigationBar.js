import React from 'react';
import logo from './../../img/Portfol.io.png';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';

const Styles = styled.div`
  .navbar { background-color: #white; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #1aa260;
    &:hover { color: #1bbb6e; }
  }
  .navbar-brand {
    font-size: 2.7em;
    color: black;
    &:hover { color: black; }
  }
  .form-center {
    position: absolute !important; 
    left: 25%;
    right: 25%;
  }
  Navbar {
      left: 250px;
  }
`;



class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAdmin: false,
            redirect: false,
        }
    }

    async logout(event) {
        event.preventDefault();
        sessionStorage.removeItem("token");
        window.location.assign('/');

    }

    render() {
        let tokenInfo = sessionStorage.getItem("token");
        let isLoggedIn = false;
        if(tokenInfo != null) {
            isLoggedIn = true;
            var m = tokenInfo.lastIndexOf(" ");
            tokenInfo = tokenInfo.substring(m+1);
        } 
        let whereAreWe = this.props.location.pathname;
        var n = whereAreWe.lastIndexOf("/");
        whereAreWe = whereAreWe.substring(n+1);
        switch (whereAreWe.toLowerCase()) {
            case "":
                whereAreWe = "Home";
                break;
            case "Home":
                whereAreWe = "Home";
                break;
            case "about":
                whereAreWe = "About";
                break;
            case "login":
                whereAreWe = "Login";
                break;
            case "register":
                whereAreWe = "Register";
                break;
            case "performance":
                whereAreWe = "Performance";
                break;
            case "holdings":
                whereAreWe = "Holdings";
                break;
            case "history":
                whereAreWe = "Yearly History";
                break;
            case "dashboard":
                whereAreWe = "Dashboard";
                break;
            case "buyshare":
                whereAreWe = "Buy Share";
                break;
            case "sellshare":
                whereAreWe = "Sell Share";
                break;
            default:
                whereAreWe = "Error";
        }
        
        return (
            <Styles>
                <Navbar expand="lg">
                    <Navbar.Brand style={{ paddingLeft: 250 + 'px'}} id="pageNameTitle">{whereAreWe}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            {isLoggedIn ? (
                                <Nav.Item><Nav.Link href="/buyshare">Buy Share</Nav.Link></Nav.Item>
                            ) : (
                                <div></div>
                            )}
                            {isLoggedIn ? (
                                <Nav.Item><Nav.Link href="/sellshare">Sell Share</Nav.Link></Nav.Item>
                            ) : (
                                <Nav.Item><Nav.Link href="/register">Sign Up</Nav.Link></Nav.Item>
                            )}
                            {isLoggedIn ? (
                                <Nav.Item><Nav.Link href="/" onClick={(e) => this.logout(e)}>Log Out</Nav.Link></Nav.Item>
                            ) : (
                                <Nav.Item><Nav.Link href="/login">Login</Nav.Link></Nav.Item>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Styles>
        )
    }
}

const RouterNavigationBar = withRouter(NavigationBar);

export default class TopBar extends React.Component {
    render() {
        return (
            <RouterNavigationBar></RouterNavigationBar>
        )
    }
}
