import { firebase } from "firebase";
importScripts("https://www.gstatic.com/firebasejs/8.6.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.6.1/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
var config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};
firebase.initializeApp(config);

const messaging = firebase.messaging();
messaging
  .requestPermission()
  .then(function () {
    console.log("permission granted");
    return messaging.getToken();
  })
  .then(function (token) {
    console.log(token);
  });
// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
messaging.setBackgroundMessageHandler(function (payload) {
  const title = 'Hey World';
  const options = {
    body: payload.data.status
  }
  // eslint-disable-next-line no-console
  return self.registration.showNotification(title, options)
});

