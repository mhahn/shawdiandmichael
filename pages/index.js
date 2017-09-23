import { Component } from "react";
import Head from "next/head";
import Button from "material-ui/Button";
import TextField from "material-ui/TextField";
import { withStyles } from "material-ui/styles";
import { CSSTransitionGroup } from "react-transition-group";

import withRoot from "../components/withRoot";
import Background from "../components/background";
import Header from "../components/header";
import Auth from "../components/auth";

const styles = {
  "@global": {
    html: {
      backgroundColor: "black"
    }
  },
  container: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    alignContent: "center",
    height: "100%",
    width: "100%",
    justifyContent: "center"
  },
  auth: {
    marginTop: 50
  },
  backgroundAppear: {
    opacity: 0.01
  },
  backgroundAppearActive: {
    opacity: 1,
    transition: "opacity 1s ease-in-out"
  }
};

const Page = ({ classes }) => (
  <CSSTransitionGroup
    transitionAppear={true}
    transitionAppearTimeout={1000}
    transitionEnter={false}
    transitionLeave={false}
    transitionName={{
      appear: classes.backgroundAppear,
      appearActive: classes.backgroundAppearActive
    }}
  >
    <Background>
      <div className={classes.container}>
        <Header />
        <Auth className={classes.auth} />
      </div>
    </Background>
  </CSSTransitionGroup>
);

export default withRoot(withStyles(styles)(Page));
