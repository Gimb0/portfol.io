import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './Components/js/NavigationBar';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import { Home } from './pages/Home';
import About from './pages/About';
import { NoMatch } from './pages/NoMatch';
import Holdings from './pages/Holdings';
import Performance from './pages/Performance';
import Dashboard from './pages/Dashboard';
import History from './pages/History';
import Sidebar from './Components/js/Sidebar';
import LoginForm from './pages/LoginForm';
import RegisterForm from './pages/RegisterForm';
import BuyShare from './pages/BuyShare';
import SellShare from './pages/SellShare';
import { checkTokenValidity, checkIfAdmin, getAllUsers } from './Components/js/checkToken.js';


class App extends React.Component {

  componentDidMount() {
    checkTokenValidity();
    checkIfAdmin();
    getAllUsers();
  }

  render() {
    let tokenInfo = sessionStorage.getItem("token");
    let isLoggedIn = false;
    if (tokenInfo != null) {
      isLoggedIn = true;
      var m = tokenInfo.lastIndexOf(" ");
      tokenInfo = tokenInfo.substring(m + 1);
    }
    return (

      <React.Fragment>

        <Router>

          <NavigationBar />
          {isLoggedIn ? (
            <Sidebar />
          ) : (
            <div></div>
          )}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/login" component={LoginForm} />
            <Route path="/about" component={About} />
            <Route path="/holdings" component={Holdings} />
            <Route path="/performance" component={Performance} />
            <Route path="/history" component={History} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/register" component={RegisterForm} />
            <Route path="/buyshare" component={BuyShare} />
            <Route path="/sellshare" component={SellShare} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </React.Fragment>
    )
  }

}


export default App;
