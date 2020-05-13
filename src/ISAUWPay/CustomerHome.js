import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol} from 'mdbreact';
import QRCode from "qrcode.react";
import {withFirebase} from "./Firebase";
import {withRouter} from "react-router";

export class CustomerHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uid: 0,
            userObject: {},
        };
    }

    componentDidMount() {
        this.authListener = this.props.firebase.auth.onAuthStateChanged (() => {
            let currUser = this.props.firebase.auth.currentUser;
            let uid = currUser.uid;
            this.userRef = this.props.firebase.userRef(uid);
            this.userRef.once("value", (snapshot) => {
                this.setState({
                    uid: uid,
                    userObject: snapshot.val()
                });
            });
        });
    }

    componentWillUnmount() {
        this.authListener();
        if (!!this.userRef) {
            this.userRef.off();
        }
    }

    // Renders the customer page (qr code, balance, payments, etc)
	render() {
        let uid = this.state.uid.toString();
        let balance = this.state.userObject.balance;
        let name = this.state.userObject.name;

        let qrCodeSize = 200;
		return (
            <div className="page p-adjust" id="pay-customer-home">
                <MDBContainer fluid>
                    <MDBRow className="page-title"><h1>WALLET</h1></MDBRow>
                    <MDBRow>
                        <MDBCol>
                            <div id="user-qr" className="p-3"><QRCode value={uid} size={qrCodeSize} /></div>
                        </MDBCol>
                        <MDBCol size="12">
                            <div id="user-details">
                                <MDBRow><p id="user-name">{name}</p></MDBRow>
                                <MDBRow><p>Balance: &nbsp;&nbsp;$<span id="user-balance">{balance}</span></p></MDBRow>
                            </div>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="action-container">
                        <button id="pay-btn" className="btn btn-lg btn-isauw white-text" aria-label="Pay Button" onClick={() => this.props.history.push("/isauw-pay/customer/pay")}>Pay</button>
                        <button id="logout" className="btn btn-lg btn-isauw white-text" aria-label="Sign Out Button" onClick={this.props.firebase.doSignOut}>Sign Out</button>
                    </MDBRow>
                    <div id="orders">
                        <MDBRow className="items-container">
                            <div className="col-12 section-title d-flex justify-content-around">
                                <div id="pending" className="filter-btn"><p>ORDER HISTORY</p></div>
                            </div>
                            <div className="col-12">
                                {this.renderOrders()}
                            </div>
                        </MDBRow>
                    </div>
                </MDBContainer>
            </div>
		);
    }

    renderOrders() {
        let orders = this.state.userObject.orders;
        if (!!orders) {
            let renderOrder = [];
            orders.forEach((order, i) => {
                renderOrder.unshift(
                    <MDBRow key={i} className="text-center">
                        <MDBCol size="6">{order.itemName}</MDBCol>
                        <MDBCol size="6">{"$" + order.itemPrice}</MDBCol>
                    </MDBRow>
                );
            });
            return renderOrder;
        } else {
            return (<p className="text-center">No orders yet</p>);
        }
    }

}

export default withFirebase(withRouter(CustomerHome));