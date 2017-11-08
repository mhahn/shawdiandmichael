import { withStyles } from "material-ui/styles";
import classNames from "classnames";

const styles = {
  root: {
    borderTop: "3px solid black",
    width: 100,
    margin: 50
  }
};

const SectionDivider = ({ classes, className }) => (
  <hr className={classNames(classes.root, {}, className)} />
);

export default withStyles(styles)(SectionDivider);
