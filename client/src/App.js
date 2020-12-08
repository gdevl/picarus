import React from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";

import UserList from "./components/UsersList";
import Landing from "./components/Landing/Landing";
import Logo from "./components/Logo/Logo";
import Signup from "./components/Signup/Signup";
import SignIn from "./components/SignIn/SignIn";

const App = () => {
  return (
    <BrowserRouter>
      {/* <nav>
        <ul>
          <li>
            <NavLink to="/" activeClass="active">
              Signup <FaBeer />
            </NavLink>
          </li>
          <li>
            <NavLink to="/users" activeClass="active">
              Users
            </NavLink>
          </li>
        </ul>
      </nav> */}
      <Switch>
        <Route path="/users">
          <UserList />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>

        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
