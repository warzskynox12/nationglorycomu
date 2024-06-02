import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCknnv2K7Zlzh-cxqbAb1lDuoFB79JNvoY",
  authDomain: "nationsglory-62812.firebaseapp.com",
  projectId: "nationsglory-62812",
  storageBucket: "nationsglory-62812.appspot.com",
  messagingSenderId: "1062049263686",
  appId: "1:1062049263686:web:42dc7925af2b4f1da69a47",
  measurementId: "G-156LHMY0NL"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;