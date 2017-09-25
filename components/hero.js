import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";
import Hidden from "material-ui/Hidden";

import DownArrow from "./down-arrow";

const styles = theme => ({
  content: {
    minHeight: "100vh",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    background: "url('assets/img/vineyard-road.jpg') center no-repeat",
    backgroundSize: "cover",
    textAlign: "center"
  },
  scroll: {
    paddingTop: "4rem",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    position: "absolute",
    bottom: 100
  },
  titleText: {
    fontFamily: "'Over the Rainbow', cursive",
    color: theme.custom.offWhite
  },
  text: {
    color: theme.custom.offWhite
  }
});

const Hero = ({ classes }) => (
  <div className={classes.content}>
    <div className={classes.title}>
      <Hidden smDown implementation="css">
        <Typography
          className={classes.titleText}
          type="display3"
          gutterBottom
          color="inherit"
        >
          Shawdi & Michael
        </Typography>
      </Hidden>
      <Hidden smUp implementation="css">
        <Typography
          className={classes.titleText}
          type="display2"
          gutterBottom
          color="inherit"
        >
          Shawdi & Michael
        </Typography>
      </Hidden>
      <Typography
        className={classes.titleText}
        type="headline"
        gutterBottom
        color="inherit"
      >
        July 28, 2018 • Sonoma, CA
      </Typography>
    </div>
    <div className={classes.scroll}>
      <Typography type="subheading" className={classes.text} gutterBottom>
        Scroll for More
      </Typography>
      <DownArrow />
    </div>
  </div>
);

export default withStyles(styles)(Hero);
