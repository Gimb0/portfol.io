import React from 'react';
import './Layout.css';
import logo from './Portfol.io.png';
import tinyLogo from './PortfolioSquare.png';
import { FaHome, FaBars } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";
import { AiOutlineProfile } from "react-icons/ai";
import { AiOutlineRise } from "react-icons/ai";
import Sidebar from "react-sidebar";
import {
    BrowserRouter as Router,
    Swich,
    Route,
    Link,
    Switch
  } from "react-router-dom"

class Layout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sidebarOpen: true,
        }
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
    }

    render() {
        return (
            <Sidebar
                sidebar={<b>Sidebar content</b>}
                open = {this.state.sidebarOpen}
                onSetOpen = {this.onSetSidebarOpen}
                styles = {{ sidebar: { background: "blue" } }}
                >
                    <button onClick = {() => this.onSetSidebarOpen(true)}>
                        Open sidebar
                    </button>
                </Sidebar>

            <div id='layout'>
                <div id='left' className={leftOpen}>
                    <div className='icon' onClick={this.toggleSidebar}>
                        <FaBars />
                    </div>
                    <div className='content'>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="#"><FaHome /></Link>
                                </li>
                                <li>
                                    <Link to="#"><FaInfoCircle /></Link>
                                </li>
                                <li>
                                    <Link to="#"><AiOutlineDashboard /></Link>
                                </li>
                                <li>
                                    <Link to="#"><AiOutlineProfile /></Link>
                                </li>
                                <li>
                                    <Link to="#"><AiOutlineRise /></Link>
                                </li>
                            </ul>
                        </nav>

                    </div>
                </div>
                <div id='main'>
                    <div className='header'>
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>
                    <div className='content'>
                        <h3>Main content</h3><br />
                        <p>
                            Nam accumsan eleifend metus at imperdiet. Mauris pellentesque ipsum nisi, et fringilla leo blandit sed. In tempor, leo sit amet fringilla imperdiet, ipsum enim sagittis sem, non molestie nisi purus consequat sapien. Proin at velit id elit tincidunt iaculis ac ac libero. Vivamus vitae tincidunt ex. Duis sit amet lacinia massa. Quisque lobortis tincidunt metus ut commodo. Sed euismod quam gravida condimentum commodo.
                  </p><br />
                        <p>
                            Vivamus tincidunt risus ut sapien tincidunt, ac fermentum libero dapibus. Duis accumsan enim ac magna tempor, vestibulum euismod nisl pharetra. Ut dictum lacus eu venenatis vestibulum. Vestibulum euismod at arcu ac blandit. Curabitur eu imperdiet magna. Duis bibendum efficitur diam, eget placerat nunc imperdiet eget. Morbi porta at leo sed porta. Nullam eleifend eleifend quam eget dictum.
                  </p><br />
                        <p>
                            Sed nulla erat, lacinia sit amet dui at, cursus blandit neque. In ultricies, dui a laoreet dignissim, risus mi cursus risus, at luctus sem arcu non tortor. In hac habitasse platea dictumst. Etiam ut vulputate augue. Aenean efficitur commodo ipsum, in aliquet arcu blandit non. Praesent sed tempus dui, non eleifend nisi. Proin non finibus diam, quis finibus ante. Fusce aliquam faucibus mauris, id consequat velit ultricies at. Aliquam neque erat, fermentum non aliquam id, mattis nec justo. Nullam eget suscipit lectus.
                  </p>
                    </div>
                </div>
            </div>

        );
    }
}

export default Layout;