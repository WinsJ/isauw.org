import React, {Component} from 'react';
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import CustomerHome from './CustomerHome';
import CustomerPay from './CustomerPay';
import { withAuthorization } from './Session';

export class Customer extends Component {
    render() {
        return (
            <div id="isauw-pay-customer">
                <Redirect exact from="/isauw-pay/customer" to="/isauw-pay/customer/home"/>
                <Switch>
                    <Route exact path="/isauw-pay/customer/home">
                        <CustomerHome />
                    </Route>
                    <Route exact path="/isauw-pay/customer/pay">
                        <CustomerPay />
                    </Route>
                </Switch>
            </div>
        );
    }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Customer);