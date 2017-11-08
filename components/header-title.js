import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";

const styles = theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 50,
    marginBottom: 100
  },
  text: {
    fontFamily: theme.custom.titleFontFamily,
    color: theme.custom.black
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
      Shawdi
    </Typography>
    <Typography
      className={classes.text}
      type="headline"
      gutterBottom
      color="inherit"
    >
      and
    </Typography>
    <Typography
      className={classes.text}
      type="display2"
      gutterBottom
      color="inherit"
    >
      Michael
    </Typography>
  </div>
);

export default withStyles(styles)(HeaderTitle);
