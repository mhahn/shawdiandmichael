import { withStyles } from "material-ui/styles";
import compose from "recompose/compose";
import Grid from "material-ui/Grid";
import Hidden from "material-ui/Hidden";
import Typography from "material-ui/Typography";
import withWidth from "material-ui/utils/withWidth";

const styles = theme => ({
  container: {
    zIndex: 100,
    flexGrow: 1,
    display: "flex",
    flexWrap: "wrap",
    position: "fixed",
    backgroundColor: "white",
    width: "100%",
    height: theme.custom.headerHeight,
    justifyContent: "space-around",
    alignItems: "center",
    top: 0
  }
});

const Header = ({ classes }) => (
  <div className={classes.container}>
    <Hidden smDown implementation="css">
      <Typography type="subheading">Destination</Typography>
    </Hidden>
    <Hidden smDown implementation="css">
      <Typography type="subheading">The Weekend</Typography>
    </Hidden>
    <Hidden smDown implementation="css">
      <Typography type="subheading">Lodging</Typography>
    </Hidden>
    <Hidden smDown implementation="css">
      <Typography type="subheading">FAQ</Typography>
    </Hidden>
    <Hidden mdUp implementation="css">
      <Typography type="subheading">Menu</Typography>
    </Hidden>
  </div>
);

export default compose(withStyles(styles))(Header);
