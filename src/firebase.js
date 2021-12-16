import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCbcptOyMFd__rCOMbR-UuKCYDLjoc3crI",
  authDomain: "slack-clone-f1a57.firebaseapp.com",
  projectId: "slack-clone-f1a57",
  storageBucket: "slack-clone-f1a57.appspot.com",
  messagingSenderId: "1056263604767",
  appId: "1:1056263604767:web:c33784fe830f3dc9bd232a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };