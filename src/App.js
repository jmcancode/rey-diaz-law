import React from "react";
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

function App() {
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
