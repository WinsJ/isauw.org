import React from 'react';
import ReactDOM from 'react-dom';

// CSS Stuff
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./sticky-footer.css"

import App from './App';
import * as serviceWorker from './serviceWorker';

import Firebase, { FirebaseContext } from './ISAUWPay/Firebase';
ReactDOM.render(
    <FirebaseContext.Provider value={new Firebase()}>
        <App />
    </FirebaseContext.Provider>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();