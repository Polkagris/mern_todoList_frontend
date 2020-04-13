import React from "react";
import { Switch } from "react-router-dom";
import AppliedRoutes from "./components/AppliedRoutes";
import Home from "./pages/Home";
import Register from "./pages/Register";

function Routes({ appProps }) {
  return (
    <Switch>
      <AppliedRoutes exact path="/" component={Home} />

      <AppliedRoutes
        path="/register"
        exact
        component={Register}
        appProps={appProps}
      />
    </Switch>
  );
}

export default Routes;
