import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";

const styles = theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    marginTop: 50,
    marginBottom: 50
  },
  text: {
    fontFamily: theme.custom.titleFontFamily,
    color: theme.custom.black,
    fontWeight: 500
  },
  fancy: {
    fontFamily: theme.custom.fancyFontFamily
  }
});

const HeaderTitle = ({ classes }) => (
  <div className={classes.container}>
    <Typography
      className={classes.text}
      type="display2"
      gutterBottom
      color="inherit"
    >
      SHAWDI &
    </Typography>
    <Typography
      className={classes.text}
      type="display2"
      gutterBottom
      color="inherit"
    >
      MICHAEL
    </Typography>
  </div>
);

export default withStyles(styles)(HeaderTitle);
