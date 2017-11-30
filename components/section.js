import { withStyles } from "material-ui/styles";
import classNames from "classnames";
import Typography from "material-ui/Typography";

import SectionDivider from "./section-divider";

const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    zIndex: -1
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxSizing: "border-box",
    width: "100%",
    position: "relative",
    maxWidth: 800
  }
};

const Section = ({ classes, children, title, className }) => (
  <div className={classes.root}>
    <div className={classNames(classes.content, {}, className)}>
      <Typography type="headline" gutterBottom>
        {title}
      </Typography>
      {children}
    </div>
  </div>
);

export default withStyles(styles)(Section);
