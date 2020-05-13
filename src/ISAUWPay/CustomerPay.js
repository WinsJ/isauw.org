import React, {Component} from "react";
import {MDBCol, MDBContainer, MDBRow} from "mdbreact";
import {withRouter} from "react-router-dom";
import Form from "react-bootstrap/Form";
import {withFirebase} from "./Firebase";

export class CustomerPay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            balance: 0,
            selectedVendor: "",
            selectedItem: "",
            vendors: {},
            itemPrice: 0
        };
        this.purchaseCancel = this.purchaseCancel.bind(this);
        this.purchaseItems = this.purchaseItems.bind(this);
        this.onChangeVendor = this.onChangeVendor.bind(this);
        this.onChangeItem = this.onChangeItem.bind(this);
    }

    componentDidMount() {
        this.vendorRef = this.props.firebase.db.ref("vendors");
        this.vendorRef.on("value", (snapshot) => {
            this.setState({
                vendors: snapshot.val(),
            });
        });

        this.authListener = this.props.firebase.auth.onAuthStateChanged (() => {
            let currUser = this.props.firebase.auth.currentUser;
            let uid = currUser.uid;
            let userRef = this.props.firebase.userRef(uid);
            userRef.on("value", (snapshot) => {
                this.setState({
                    balance: snapshot.val().balance
                });
            });
        });
    }

    componentWillUnmount() {
        this.authListener();
        this.vendorRef.off();
    }

    render() {
        let balance = this.state.balance;

        return(
            <div className="p-adjust" id="pay-customer-pay">
                <MDBContainer fluid>
                    <MDBRow className="page-title"><h1>PURCHASE ITEMS</h1></MDBRow>
                    <MDBRow>
                        {this.renderOptions()}
                    </MDBRow>
                    <MDBRow>
                        <MDBCol size="12">
                            <div id="user-details">
                                {this.renderTotalPrice()}
                                <MDBRow><p>Balance: &nbsp;&nbsp;$<span id="user-balance">{balance}</span></p></MDBRow>
                            </div>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="action-container">
                        <button id="pay-btn" className="btn btn-lg btn-isauw white-text" aria-label="Pay Button" onClick={this.purchaseItems}>Purchase</button>
                        <button id="pay-btn" className="btn btn-lg btn-isauw white-text" aria-label="Cancel Button" onClick={this.purchaseCancel}>Cancel</button>
                    </MDBRow>
                </MDBContainer>
            </div>
        );
    }

    renderOptions() {
        let vendorOptions = [];
        Object.keys(this.state.vendors).forEach((vendor) => {
            vendorOptions.push((<option key={vendor}>{vendor}</option>));
        });

        let itemOptions = [];
        if (this.state.selectedVendor !== "" && !!this.state.vendors[this.state.selectedVendor]) {
            Object.keys(this.state.vendors[this.state.selectedVendor]).forEach((item) => {
                itemOptions.push((<option key={item}>{item}</option>))
            });
        }

        return (
            <MDBCol>
                <Form>
                    <MDBRow>
                        <Form.Group>
                            <Form.Control as="select" defaultValue="Select a vendor" onChange={this.onChangeVendor}>
                                <option disabled>Select a vendor</option>
                                {vendorOptions}
                            </Form.Control>
                        </Form.Group>
                    </MDBRow>
                    <MDBRow>
                        <Form.Group>
                            <Form.Control as="select" defaultValue="Select an item" onChange={this.onChangeItem}>
                                <option disabled>Select an item</option>
                                {itemOptions}
                            </Form.Control>
                        </Form.Group>
                    </MDBRow>
                </Form>
            </MDBCol>
        );
    }

    onChangeVendor(event) {
        this.setState({selectedVendor: event.target.value});
    }

    onChangeItem(event) {
        this.setState({
            selectedItem: event.target.value,
            itemPrice: this.state.vendors[this.state.selectedVendor][event.target.value]
        });
    }

    renderTotalPrice() {
        if (this.state.selectedItem !== "") {
            return (<MDBRow><p>Total Price: &nbsp;&nbsp;$<span>{this.state.itemPrice}</span></p></MDBRow>);
        }
    }

    purchaseItems() {
        if (this.state.selectedVendor === "") {
            alert("You haven't selected anything!");
        } else {
            let userRef = this.props.firebase.userRef(this.props.firebase.auth.currentUser.uid);
            let itemPrice = this.state.itemPrice;
            let newBalance = 0;
            let orders = [];
            userRef.once("value", (snapshot) => {
                newBalance = snapshot.val().balance - itemPrice;
                orders = snapshot.val().orders;
            }).then(() => {
                if (newBalance < 0) {
                    alert("You do not have enough balance!");
                } else {
                    let newOrder = {
                        itemName: this.state.selectedItem,
                        itemPrice: itemPrice
                    };
                    if (!!orders) {
                        orders.push(newOrder);
                    } else {
                        orders = [newOrder];
                    }
                    userRef.update({
                        balance: newBalance,
                        orders: orders
                    });
                    this.props.history.push("/isauw-pay/customer/home");
                }
            });
        }
    }

    purchaseCancel() {
        this.props.history.push("/isauw-pay/customer/home");
    }
}

export default withRouter(withFirebase(CustomerPay));
