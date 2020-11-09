import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDuvdhChy0fU5M9IrtOcDJsWn8B7Hc3kpQ",
    authDomain: "twitter-react-2020.firebaseapp.com",
    databaseURL: "https://twitter-react-2020.firebaseio.com",
    projectId: "twitter-react-2020",
    storageBucket: "twitter-react-2020.appspot.com",
    messagingSenderId: "702923988028",
    appId: "1:702923988028:web:30afb7bcecf426eacdb739",
    measurementId: "G-GEVJB6XEVT"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;