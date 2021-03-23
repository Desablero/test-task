import "./App.css";
import Header from "./components/header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home from "./components/home";
import News from "./components/news";
import Weather from "./components/weather";
import Profile from "./components/profile";
import Login from "./components/login";

function App() {
  return (
    <div className="App">
      <Header />

      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/news" component={News} />
          <Route exact path="/weather" component={Weather} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/login" component={Profile} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
