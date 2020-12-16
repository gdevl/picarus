import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import { loadToken } from "./store/actions/authentication";
import { ProtectedRoute, PrivateRoute } from "./auth-routes";
import Main from "./components/Main/Main";

import Landing from "./components/Landing/Landing";
import Signup from "./components/Signup/Signup";
import SignIn from "./components/SignIn/SignIn";

const App = ({ needLogin, loadToken }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    loadToken();
  }, [loadToken]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/landing" component={Landing}>
          <Landing />
        </Route>
        <ProtectedRoute
          path="/landing"
          exact={true}
          needLogin={needLogin}
          component={Landing}
        />
        <PrivateRoute path="/" needLogin={needLogin} component={Main} />
      </Switch>
    </BrowserRouter>
  );
};

const AppContainer = () => {
  const needLogin = useSelector((state) => !state.authentication.token);
  const dispatch = useDispatch();
  return <App needLogin={needLogin} loadToken={() => dispatch(loadToken())} />;
};

export default AppContainer;
