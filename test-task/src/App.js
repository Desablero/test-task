import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import Header from "./components/header";
import Home from "./components/home";
import News from "./components/news";
import Weather from "./components/weather";
import Login from "./components/login";

import Profile from "./components/profile/profile";

function App() {
  const { isLoading, isAuthenticated, user } = useAuth0();

  if (isLoading) return <div>Loading...</div>;
  console.log(isAuthenticated);

  const visiblePerson = isAuthenticated && (
    <div className="person-profile">
      <img src={user.picture} alt={user.name} />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      {/* {JSON.stringify(user, null, 2)} */}
    </div>
  );
  return (
    <div className="app">
      <Header />
      {visiblePerson}

      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/news" component={News} />
          <Route path="/weather" component={Weather} />
          <Route path="/profile" component={Profile} />
          <Route path="/login" component={Login} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
