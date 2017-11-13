import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";

const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 100
  },
  caption: {
    fontSize: 12
  }
});

const Footer = ({ classes }) => (
  <div className={classes.root}>
    <Typography classes={{ caption: classes.caption }} type="caption">
      Built by the Groom, with a lot of opinions from the Bride 😅
    </Typography>
  </div>
);

export default withStyles(styles)(Footer);
