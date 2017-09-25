import { Component } from "react";
import Head from "next/head";
import Typography from "material-ui/Typography";
import { withStyles } from "material-ui/styles";

import withRoot from "../components/withRoot";
import Header from "../components/header";
import Splash from "../components/splash";

const styles = theme => ({
  "@global": {
    html: {
      backgroundColor: "white"
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
  content: {
    marginTop: theme.custom.headerHeight,
    display: "flex",
    flexDirection: "column",
    position: "relative"
  },
  section: {
    boxSizing: "border-box",
    width: "100%",
    padding: "6rem 1.5em",
    position: "relative"
  }
});

const Page = ({ classes }) => (
  <div>
    <Header />
    <div className={classes.content}>
      <div
        className={classes.section}
        style={{ backgroundColor: "black", padding: 0 }}
      >
        <Splash />
      </div>
      <div className={classes.section} style={{ backgroundColor: "blue" }} />
      <div className={classes.section} style={{ backgroundColor: "green" }} />
    </div>
  </div>
);

export default withRoot(withStyles(styles)(Page));
