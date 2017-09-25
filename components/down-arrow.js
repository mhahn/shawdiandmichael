import { withStyles } from "material-ui/styles";

const styles = {
  main: {
    color: "white"
  }
};

const DownArrow = ({ classes }) => (
  <svg
    className={classes.main}
    height="50px"
    viewBox="0 0 5 27"
    stroke="none"
    fill="currentColor"
  >
    <rect x="2" y="0" width="1" height="23" />
    <path d="M0,22.244 L2.493,26.562 L4.986,22.244 L0,22.244 Z" />
  </svg>
);

export default withStyles(styles)(DownArrow);
