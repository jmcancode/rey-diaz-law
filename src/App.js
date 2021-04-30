import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import Dashboard from "./components/dashboard.component.js";

import { AuthProvider } from "./Firebase/context";
import PrivateRoute from "./components/private.route";
import UserAccount from "./pages/userAccount";
import UserInbox from "./pages/inbox";

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
            <PrivateRoute exact path="/" component={Dashboard} />
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
