import firebase from 'firebase';



const firebaseConfig = {
    apiKey: "AIzaSyCpjdozpGsnC1xFfYvOHOHlnNNYe4JDuug",
    authDomain: "linkedin-clone-f6033.firebaseapp.com",
    projectId: "linkedin-clone-f6033",
    storageBucket: "linkedin-clone-f6033.appspot.com",
    messagingSenderId: "927101850020",
    appId: "1:927101850020:web:9bb69148fae379e3a5b131"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth }