import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./home.page";
const Layout = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/app/dashboard" component={Home} />
      </Switch>
    </React.Fragment>
  );
};
export default Layout;
