import { withStyles } from "material-ui/styles";
import classNames from "classnames";

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
    height: "100vh"
  }
};

const Section = ({ classes, children, className }) => (
  <div className={classes.root}>
    <SectionDivider />
    <div className={classNames(classes.content, {}, className)}>{children}</div>
  </div>
);

export default withStyles(styles)(Section);
