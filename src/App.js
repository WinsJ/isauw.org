import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route, Redirect,

} from "react-router-dom";

import './App.css';

import Header from "./common/Header";
import Footer from "./common/Footer";
import Home from "./Home/Home";
import ISAUWPay from './ISAUWPay/ISAUWPay';

function App() {
    return (
        <div className="Site">
            <Router basename={process.env.PUBLIC_URL + "/"}>
                <div className="Site-content">
                    <Header/>
                    <Redirect to="/home"/>
                    <Switch>
                        <Route exact path="/home" component={Home}/>
                        <Route path="/isauw-pay">
                            <ISAUWPay />
                        </Route>
                    </Switch>
                </div>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;