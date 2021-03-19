import React from "react";
import {
  AppBar,
  Container,
  IconButton,
  Toolbar,
  Typography,
  Box,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import { makeStyles } from "@material-ui/core/styles";

import "./header.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "../home";
import News from "../news";
import Weather from "../weather";
import Profile from "../profile";
import Login from "../login";

// Material-UI Hook
const useStyles = makeStyles((theme) => ({
  appBar: {
    flexGrow: 1, // определяет как много свободного пространства во flex-контейнере должно быть назначено текущему элементу
  },
  homeButton: {
    marginRight: theme.spacing(1), // spacing 1 эквивалент 8-и пикселям
  },
  title: {
    marginRight: theme.spacing(5),
    marginLeft: theme.spacing(5),
  },
  navButton: {
    marginRight: theme.spacing(6),
  },
  logIn: {
    marginLeft: theme.spacing(50),
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Container className={classes.appBar} fixed>
          <Toolbar>
            <IconButton
              className={classes.homeButton}
              edge="start"
              color="inherit"
              href="/"
            >
              <HomeIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6">
              Application task
            </Typography>
            <Box>
              <Button
                href="/news"
                className={classes.navButton}
                color="inherit"
              >
                News
              </Button>
              <Button
                className={classes.navButton}
                color="inherit"
                href="/weather"
              >
                Weather
              </Button>
              <Button
                className={classes.navButton}
                color="inherit"
                href="/profile"
              >
                Profile
              </Button>
              <Button
                className={classes.logIn}
                size="small"
                variant="contained"
                color="secondary"
                startIcon={<PersonIcon />}
                href="/login"
              >
                Log In
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/news" component={News} />
          <Route exact path="/weather" component={Weather} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}
