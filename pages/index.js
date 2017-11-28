import { Component } from "react";
import Head from "next/head";
import Typography from "material-ui/Typography";
import { withStyles } from "material-ui/styles";
import { Sticky, StickyContainer } from "react-sticky";
import { Element } from "react-scroll";

import splashImage from "../components/splash-image";
import withRoot from "../components/withRoot";

import HeaderTitle from "../components/header-title";
import HeaderNav from "../components/header-nav";
import Destination from "../components/destination";
import TravelingIn from "../components/traveling-in";
import Lodging from "../components/lodging";
import FAQs from "../components/faqs";
import GuideSonoma from "../components/guide-sonoma";
import GuideSanFrancisco from "../components/guide-san-francisco";
import Footer from "../components/footer";

const styles = theme => ({
  "@global": {
    html: {
      backgroundColor: "white"
    }
  },
  content: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    position: "relative",
    minHeight: "100vh",
    width: "100%"
  },
  imageContainer: {
    boxSizing: "border-box",
    border: "8px solid rgb(255, 255, 255)",
    boxShadow: "rgba(0, 0, 0, 0.25) 0px 1px 4px",
    margin: 30
  },
  imageSection: {
    display: "flex",
    justifyContent: "center"
  },
  image: {
    width: "100%"
  },
  scroll: {
    paddingTop: "4rem",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    position: "absolute",
    bottom: 100
  },
  subtitleSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  stickyContainer: {
    width: "100%"
  }
});

const Page = ({ classes }) => (
  <div>
    <Head>
      <title>Shawdi & Michael</title>
    </Head>
    <div className={classes.content}>
      <HeaderTitle />
      <StickyContainer className={classes.stickyContainer}>
        <Sticky>
          {({ isSticky, style }) => (
            <HeaderNav style={style} sticky={isSticky} />
          )}
        </Sticky>
        <div className={classes.imageSection}>
          <div className={classes.imageContainer}>
            <img className={classes.image} src={`${splashImage}`} />
          </div>
        </div>
        <div className={classes.subtitleSection}>
          <Typography type="title" gutterBottom color="inherit">
            July 28, 2018 • 4pm
          </Typography>
          <Typography type="subheading" gutterBottom color="inherit">
            Sonoma, CA • Tyge Williams Cellars
          </Typography>
        </div>
        <Element name="destination">
          <Destination />
        </Element>
        <Element name="traveling-in">
          <TravelingIn />
        </Element>
        <Element name="lodging">
          <Lodging />
        </Element>
        <Element name="faqs">
          <FAQs />
        </Element>
        <Element name="sonoma">
          <GuideSonoma />
        </Element>
        <Element name="san-francisco">
          <GuideSanFrancisco />
        </Element>
        <Footer />
      </StickyContainer>
    </div>
  </div>
);

export default withRoot(withStyles(styles)(Page));
