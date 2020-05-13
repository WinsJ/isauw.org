import React, { Component } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { NavLink } from "react-router-dom";

export default class Footer extends Component {
	render() {
		return (
                <MDBFooter className="font-small redBackgroundColor">
                    <MDBContainer fluid className="text-center text-md-left py-4">
                        <MDBRow className="justify-content-md-center">
                        <MDBCol md="2" className="mt-md-0 text-uppercase text-md-right">
                                <h3>
                                    Join
                                    <br/>
                                    ISAUW
                                    <br/>
                                    Now
                                </h3>
                        </MDBCol>
                        <hr className="clearfix w-100 d-md-none"/> 
                        <MDBCol md="2" className="mt-md-0 align-self-center">
                            <h5 className="text-uppercase text-center">Follow Us</h5>
                            <ul className="list-unstyled list-inline text-center">
                                <li className="list-inline-item">
                                    <a className="btn-floating btn-fb mx-1" href="https://www.facebook.com/isauw.huskies/" title="Facebook" aria-label="Go to ISAUW's Facebook page" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-facebook-f"> </i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="btn-floating btn-ins mx-1" href="https://www.instagram.com/isauwhuskies/" title="Instagram" aria-label="Go to ISAUW's Instagram page" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-instagram"> </i>
                                    </a>
                                </li>
                                {/* <li className="list-inline-item">
                                    <a className="btn-floating btn-li mx-1" href="https://www.linkedin.com/company/isauw/" title="LinkedIn" aria-label="Go to ISAUW's LinkedIn" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-linkedin-in"> </i>
                                    </a>
                                </li> */}
                                <li className="list-inline-item">
                                    <a className="btn-floating btn-envelope mx-1" href="mailto:isauw@uw.edu" title="Email" aria-label="Send an email to ISAUW" target="_blank" rel="noopener noreferrer">
                                        <i className="far fa-envelope"> </i>
                                    </a>
                                </li>
                            </ul>
                        </MDBCol>
                        <hr className="clearfix w-100 d-md-none"/> 
                        <MDBCol md="2" className="mb-md-0">
                            <h5 className="text-uppercase">Pages</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <NavLink to="/home">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/isauw-pay">ISAUW Pay</NavLink>
                                </li>
                            </ul>
                        </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                    <div className="footer-copyright text-center py-3">
                        <MDBContainer fluid>
                            &copy; {new Date().getFullYear()} Copyright: <a href="https://www.isauw.org/"> Indonesian Student Association at the University of Washington</a>
                        </MDBContainer>
                    </div>
                </MDBFooter>
		);
	}
}