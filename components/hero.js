import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";

import Title from "./title";
import DownArrow from "./down-arrow";

const styles = {
  content: {
    minHeight: "100vh",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "black"
  },
  scroll: {
    paddingTop: "4rem",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    position: "absolute",
    bottom: 100
  },
  text: {
    color: "white"
  }
};

const Hero = ({ classes }) => (
  <div className={classes.content}>
    <Title />
    <div className={classes.scroll}>
      <Typography type="subheading" className={classes.text} gutterBottom>
        Scroll for More
      </Typography>
      <DownArrow />
    </div>
  </div>
);

export default withStyles(styles)(Hero);
