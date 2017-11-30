import { withStyles } from "material-ui/styles";

const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "center"
  },
  container: {
    boxSizing: "border-box",
    border: "8px solid rgb(255, 255, 255)",
    boxShadow: "rgba(0, 0, 0, 0.25) 0px 1px 4px"
  },
  image: {
    width: 500
  }
});

const Photo = ({ classes, src }) => (
  <div className={classes.root}>
    <div className={classes.container}>
      <img className={classes.image} src={src} />
    </div>
  </div>
);

export default withStyles(styles)(Photo);
