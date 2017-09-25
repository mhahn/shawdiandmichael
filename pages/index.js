import { Component } from "react";
import Head from "next/head";
import Typography from "material-ui/Typography";
import { withStyles } from "material-ui/styles";

import withRoot from "../components/withRoot";
import Header from "../components/header";
import Hero from "../components/hero";
import Overview from "../components/overview";

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
  }
});

const Page = ({ classes }) => (
  <div>
    <Header />
    <div className={classes.content}>
      <Hero />
      <Overview />
    </div>
  </div>
);

export default withRoot(withStyles(styles)(Page));
