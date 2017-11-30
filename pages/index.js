import { Component } from "react";
import Typography from "material-ui/Typography";
import { withStyles } from "material-ui/styles";

import splashImage from "../components/splash-image";
import withRoot from "../components/withRoot";

import Template from "../components/template";
import Photo from "../components/photo";

const styles = theme => ({
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
    justifyContent: "center",
    margin: 50
  },
  divider: {
    boderTop: "2px solid black",
    width: 300,
    margin: 25
  },
  fancy: {
    fontFamily: theme.custom.fancyFontFamily,
    fontSize: 35
  }
});

const Page = ({ classes, pathname }) => (
  <Template title="Shawdi & Michael" pathname={pathname}>
    <Photo src={`${splashImage}`} />
    <div className={classes.subtitleSection}>
      <Typography gutterBottom>WE'RE GETTING MARRIED!</Typography>
      <hr className={classes.divider} />
      <Typography gutterBottom type="title">
        SHAWDI ILBAGIAN
      </Typography>
      <Typography className={classes.fancy} gutterBottom>
        -&nbsp;and&nbsp;-
      </Typography>
      <Typography gutterBottom type="title">
        MICHAEL HAHN
      </Typography>
      <hr className={classes.divider} />
      <Typography gutterBottom>SATURDAY, JULY 28, 2018</Typography>
      <Typography gutterBottom>TYGE WILLIAM CELLARS</Typography>
      <Typography gutterBottom>SONOMA, CA</Typography>
    </div>
  </Template>
);

export default withRoot(withStyles(styles)(Page));
