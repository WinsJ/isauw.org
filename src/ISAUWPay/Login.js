import React, {Component} from 'react';
import {MDBCol, MDBContainer, MDBRow} from 'mdbreact';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from "firebase";
import withAuthorization from "./Session/withAuthorization";

export class Login extends Component {
    constructor(props) {
        super(props);
        this.uiConfig = {
            callbacks: {
                signInSuccessWithAuthResult: function (authResult) {
                    let isNewUser = authResult.additionalUserInfo.isNewUser;
                    if (isNewUser) {
                        let uid = authResult.user.uid;
                        let name = authResult.additionalUserInfo.profile.name;
                        let userRef = this.props.firebase.userRef(uid);
                        userRef.set({
                            name: name,
                            balance: 100,
                            orders: []
                        });
                    }
                    return false;
                }.bind(this)
            },
            // Popup signin flow rather than redirect flow.
            signInFlow: 'popup',
            // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
            signInSuccessUrl: '/isauw-pay/customer',
            // We will display Google and Facebook as auth providers.
            signInOptions: [
                firebase.auth.GoogleAuthProvider.PROVIDER_ID
            ]
        };
    }

	render() {
        require('./Pay.scss');
		return (
            <div id="login" className="page">
                <MDBContainer fluid>
                    <MDBRow className="justify-content-around" id="roles">
                        <MDBCol className="active-role"><a href="/isauw-pay#">CUSTOMER</a></MDBCol>
                    </MDBRow>
                </MDBContainer>
                <div className="p-adjust">
                    <MDBContainer fluid>
                        <MDBRow>
                            <img className="isauw-logo" src={process.env.PUBLIC_URL + "/isauwbird-red.png"} alt="isauwlogo-bird"/>
                        </MDBRow>
                        <h2>Please sign-in:</h2>
                        <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={this.props.firebase.auth} />
                    </MDBContainer>
                </div>
            </div>
		);
	}
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Login);