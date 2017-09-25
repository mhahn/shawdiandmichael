import { withStyles } from "material-ui/styles";
import classNames from "classnames";

const styles = {
  root: {
    boxSizing: "border-box",
    width: "100%",
    padding: "6rem 1.5em",
    position: "relative"
  }
};

const Section = ({ classes, children, className }) => (
  <div className={classNames(classes.root, {}, className)}>{children}</div>
);

export default withStyles(styles)(Section);
