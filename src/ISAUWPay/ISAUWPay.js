import React, {Component} from 'react';
import {
    Switch,
    Route
} from "react-router-dom";

import Login from "./Login";
import Customer from "./Customer";
import { withAuthentication } from './Session';
import "./Pay.scss"


export class ISAUWPay extends Component {
    render() {
        return (
            <div id="isauw-pay">
                    <Switch>
                        <Route exact path="/isauw-pay">
                            <Login />
                        </Route>
                        <Route path="/isauw-pay/customer">
                            <Customer />
                        </Route>
                    </Switch>
            </div>
        );
    }
}

export default withAuthentication(ISAUWPay);