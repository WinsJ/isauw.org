import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse} from "mdbreact";

export default class Header extends Component {
	constructor(props) {
        super(props);
        this.state = {
            collapse: false,
        };
    }

	render() {
		return (
                <header id="header" className="">
                    <MDBNavbar className="redBackgroundColor" dark expand="md">
                        <MDBNavbarBrand href="/home"><strong>ISAUW</strong></MDBNavbarBrand>
                        <MDBNavbarToggler color="white" onClick={() => this.setState({collapse: !this.state.collapse})} />
                        <MDBCollapse isOpen={this.state.collapse} navbar onClick={() => this.setState({collapse: false})}>
                            <MDBNavbarNav left >
                                <MDBNavItem><MDBNavLink to="/home">Home</MDBNavLink></MDBNavItem>
                                <MDBNavItem><MDBNavLink to="/isauw-pay">ISAUW Pay</MDBNavLink></MDBNavItem>
                            </MDBNavbarNav>
                        </MDBCollapse>
                    </MDBNavbar>
                </header>
		);
	}
}