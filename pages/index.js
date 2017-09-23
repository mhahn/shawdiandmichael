import { Component } from "react";
import Head from "next/head";
import Button from "material-ui/Button";
import TextField from "material-ui/TextField";
import { withStyles } from "material-ui/styles";
import { CSSTransitionGroup } from "react-transition-group";

import withRoot from "../components/withRoot";
import Background from "../components/background";
import Header from "../components/header";
import Password from "../components/password";

const styles = {
  "@global": {
    html: {
      backgroundColor: "black"
    }
  },
  container: {
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    height: "100%",
    width: "100%",
    justifyContent: "center"
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
      </div>
    </Background>
  </CSSTransitionGroup>
);

export default withRoot(withStyles(styles)(Page));
