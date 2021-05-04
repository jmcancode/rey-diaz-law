import firebase from "firebase/app";
import "firebase/auth";
import "firebase/analytics";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAvnhJIWDkOttiS4c_aPy7v9krdEjJB0Z8",
  authDomain: "rey-di.firebaseapp.com",
  projectId: "rey-di",
  storageBucket: "rey-di.appspot.com",
  messagingSenderId: "127282603496",
  appId: "1:127282603496:web:fb67c451b1416ce41e705d",
  measurementId: "G-ECE5V7YVY3",
});

export const auth = firebase.auth();
export const analytics = firebase.analytics().logEvent("notification_received");
export const provider = new firebase.auth.GoogleAuthProvider();
export default firebaseApp;
