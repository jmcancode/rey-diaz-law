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

function App() {
  if ("serviceWorkerRegistration" in navigator) {
    navigator.serviceWorker
      .register("firebase-messaging-sw.js")
      .then(function (registration) {
        console.log("[SW]: SCOPE: ", registration.scope);
        return registration.scope;
      })
      .catch(function (err) {
        return err;
      });
  }

  useEffect(() => {
    Notification.requestPermission()
      .then(() =>
        firebase.messaging.getToken({
          vapidKey:
            "BEg8-GcOGn9wNYlrBof6YXqMer3SWvrGCyQg0m4ySCCIRdC0XfCR4M1An6pGWZamXftGsPaB73sx8jvcGiEoDfk",
        })
      )
      .then((currentToken) => {
        console.log(currentToken);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/inbox" component={UserInbox} />
            <Route path="/myaccount" component={UserAccount} />
            <Route path="/admin" component={AdminDash} />
            <PrivateRoute exact path="/" component={Dashboard} />
            <PrivateRoute path="/didyouknow" component={DidYouKnowDetail} />
            <PrivateRoute path="/legalglossary" component={LegalGlossary} />
            <PrivateRoute path="/resources" component={LegalResources} />
            <PrivateRoute path="/whatsnew" component={WhatsNewBlog} />
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
