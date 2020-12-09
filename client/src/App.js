import React from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import Main from "./components/Main/Main";
import UserList from "./components/UsersList";
import Signup from "./components/Signup/Signup";
import SignIn from "./components/SignIn/SignIn";

const App = () => {
  return (
    <BrowserRouter>
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
          <Main />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
