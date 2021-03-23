import React from "react";

// Импорты Material IO
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

// Material-UI Hook
const useStyles = makeStyles((theme) => ({
  appBar: {
    flexGrow: 1, // определяет как много свободного пространства во flex-контейнере в текущем элементе
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
                Log Out
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </React.Fragment>
  );
}
