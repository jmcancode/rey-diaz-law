import React, { useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import Dashboard from "./components/dashboard.component.js";

import { AuthProvider } from "./Firebase/context";
import PrivateRoute from "./components/private.route";
import UserAccount from "./pages/userAccount";
import UserInbox from "./pages/inbox";
import AdminDash from "./pages/admin.dash";
import DidYouKnowDetail from "./pages/didyouknowdetails";
import LegalGlossary from "./pages/glossary";
import LegalResources from "./pages/resources";
import WhatsNewBlog from "./pages/whatsnew";
import firebase from "./Firebase/config";
import { messaging } from "firebase-admin";

function App() {
  if ("serviceWorkerRegistration" in navigator) {
    navigator.serviceWorker
      .register("firebase-messaging-sw.js")
      .then(function (registration) {
        console.error("[SW]: SCOPE: ", registration.scope);
        return registration.scope;
      })
      .catch((err) => {
        return err;
      });
  }

  useEffect(() => {
    Notification.requestPermission()
      .then(() =>
        messaging.getToken({
          vapidKey: process.env.REACT_APP_VAPID_KEY,
        })
      )
      .then((currentToken) => {
        console.log(currentToken)
        firebase.firestore().collection('notification').add()
      })
      .catch((err) => {
        console.warn(err);
      });
  }, []);

  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/location" component={UserInbox} />
            <Route path="/myaccount" component={UserAccount} />
            <Route path="/admin" component={AdminDash} />
            <PrivateRoute exact path="/" component={Dashboard} />
            <PrivateRoute path="/didyouknow/:id" component={DidYouKnowDetail} />
            <PrivateRoute path="/legalglossary" component={LegalGlossary} />
            <PrivateRoute path="/resources" component={LegalResources} />
            <PrivateRoute path="/whatsnew/:id" component={WhatsNewBlog} />
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
