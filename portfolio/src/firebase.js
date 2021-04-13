import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBrsOm06EUZ1_bxzXnSytHoa_5IxgoH2og",
  authDomain: "portfolio-4ac1f.firebaseapp.com",
  projectId: "portfolio-4ac1f",
  storageBucket: "portfolio-4ac1f.appspot.com",
  messagingSenderId: "576774996030",
  appId: "1:576774996030:web:3dbc9fc9c0a26dc0bbd16f",
});

var db = firebaseApp.firestore();

export { db };
