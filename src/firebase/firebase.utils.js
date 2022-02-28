import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyBlTQYzsjhkkDZOaZFHyBclY7cAOCimnt4",
    authDomain: "crwn-db-4213c.firebaseapp.com",
    projectId: "crwn-db-4213c",
    storageBucket: "crwn-db-4213c.appspot.com",
    messagingSenderId: "795668359612",
    appId: "1:795668359612:web:ce1d58ebc250485bbbe3b9",
    measurementId: "G-FDBX16RK2G"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;
