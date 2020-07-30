import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { isAuthenticated } from "./shared/services/auth.service";
import Login from './modules/not-auth/login';
import NotFound from "./modules/not-auth/not-found";
import Auth from "./modules/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login} />
            <PrivateRoute path="/auth" component={Auth} />
            <Route path="*" component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Routes;