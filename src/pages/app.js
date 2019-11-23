import React from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import ErrorPage from "./error";
import Login from "./auth/login";

const App = () => {
  return (
    <React.Fragment>
      <HashRouter>
        <Switch>
          <Route path="/" component={Login} />
          <Route component={ErrorPage} />
        </Switch>
      </HashRouter>
    </React.Fragment>
  );
};

export default App;
