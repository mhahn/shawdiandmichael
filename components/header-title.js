import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";

const styles = theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    marginTop: 100,
    marginBottom: 40
  },
  text: {
    fontFamily: theme.custom.titleFontFamily,
    color: theme.custom.black,
    fontWeight: 500
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
      SHAWDI & MICHAEL
    </Typography>
  </div>
);

export default withStyles(styles)(HeaderTitle);
