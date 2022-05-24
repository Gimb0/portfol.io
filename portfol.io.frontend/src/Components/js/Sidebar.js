import React from 'react';
import styled from 'styled-components';
import logo from './../../img/Portfol.io.png';
import './../css/sidebar.css';
import { BrowserRouter as Route, Link, withRouter } from "react-router-dom";


/* This defines the actual bar going down the screen */
const StyledSideNav = styled.div`
    position: fixed;     /* Fixed Sidebar (stay in place on scroll and position relative to the nearest positioned ancestor) */
    min-height: 100%;
    width: 250px;
    z-index: 1;      /* Stay on top of everything */
    background-color: #e6e6e6; /* Black */
    overflow-x: hidden;     /* Disable horizontal scroll */
    display: block;
    top: 0;
`;

const StyledNavItem = styled.div`
  width: 250px;
  height: 70px;
  /*width: 75px; /* width must be same size as NavBar to center */*/
  text-align: center; /* Aligns <a> inside of NavIcon div */
  margin-bottom: 0;   /* Puts space between NavItems */
  a {
    font-size: 2.7em;
    color: ${(props) => props.active ? "#21cc7a" : "#1aa260"};
    :hover {
        color: #1bbb6e;
        opacity: 0.7;
        text-decoration: none; /* Gets rid of underlining of icons */
    }  
  }
`;


class SideNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePath: props.location.pathname,
            userRole: null,
            userName: null,
            items: [
                {
                    path: '/Dashboard',
                    name: 'Dashboard',
                    css: 'fas fa-fw fa-tachometer-alt',
                    key: 1
                },
                {
                    path: '/Holdings',
                    name: 'Holdings',
                    css: 'fas fa-fw fa-hand-holding-usd',
                    key: 2
                },
                {
                    path: '/Performance',
                    name: 'Performance',
                    css: 'fas fa-fw fa-chart-line',
                    key: 3
                },
                {
                    path: '/History',
                    name: 'Yearly History',
                    css: 'fas fa-fw fa-history',
                    key: 4
                },
            ]
        }
    }

    onItemClick = (path) => {
        this.setState({ activePath: path }); /* Sets activePath which causes rerender which causes CSS to change */
    }

    componentDidMount() {
        let validToken = false;
        fetch("/user", {
            method: "GET",
            headers: {
                "Authorization": sessionStorage.getItem("token"),
            }
        })
            .then(resp => {
                if (resp.ok) {
                    validToken = true;
                }
                return resp.json()
            })
            .then(data => {
                if (validToken) {
                    this.setState({
                        userName: data.username,
                        userRole: data.role
                    })
                }
            });
    };

    render() {

        const { items, activePath } = this.state;
        return (
            <div className="sidebar">
                <div href="/"><img src={logo} className="App-logo" alt="logo" /></div>
                <div className="usernameWelcome">Welcome {this.state.userName}</div>
                {
                    /* items = just array AND map() loops thru that array AND item is param of that loop */
                    items.map((item) => {
                        /* Return however many NavItems in array to be rendered */
                        return (
                            <NavItem
                                path={item.path}
                                name={item.name}
                                css={item.css}
                                onItemClick={this.onItemClick} /* Simply passed an entire function to onClick prop */
                                active={item.path === activePath}
                                key={item.key} >

                            </NavItem>
                        )
                    })
                }
            </div>
        );
    }
}

const RouterSideNav = withRouter(SideNav);

class NavItem extends React.Component {
    handleClick = () => {
        const { path, onItemClick } = this.props;
        onItemClick(path);
    }

    render() {
        const { active } = this.props;
        return (
            <StyledNavItem active={active}>
                <Link to={this.props.path} onClick={this.handleClick}>
                    <NavIcon><i className={this.props.css} /></NavIcon>
                    <NavText>{this.props.name}</NavText>
                </Link>
            </StyledNavItem>
        );
    }
}

const NavIcon = styled.div`
    display: inline-block;    
    padding-left: 10px;
    padding-right: 10px;
    height: 20px;
`;
const NavText = styled.div`
    font-size: 0.5em;
    vertical-align: middle;
    display: inline-block; 
    text-align: center;
    line-height: 20px;
    height: 20px;
`;

export default class Sidebar extends React.Component {
    render() {
        return (
            <RouterSideNav></RouterSideNav>
        );
    }
}