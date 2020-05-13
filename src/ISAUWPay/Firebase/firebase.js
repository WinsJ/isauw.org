// Import FirebaseAuth and firebase.
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// Configure Firebase.
const firebaseConfig = {
    apiKey: "AIzaSyDpLSZKKKk3lXZk1mwuk_v-wU1zbkFNW2Y",
    authDomain: "project-katon.firebaseapp.com",
    databaseURL: "https://project-katon.firebaseio.com",
    projectId: "project-katon",
    storageBucket: "project-katon.appspot.com",
    messagingSenderId: "1075585983205",
    appId: "1:1075585983205:web:390465a6d62ff0648cea0c",
    measurementId: "G-G9QSPRKJ73"
};

class Firebase {
    constructor() {
        firebase.initializeApp(firebaseConfig);
        this.auth = firebase.auth();
        this.db = firebase.database();
    }

    doSignOut = () => this.auth.signOut();
    userRef = uid => this.db.ref("users/" + uid);
}

export default Firebase;