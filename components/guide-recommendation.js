import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    width: 200,
    padding: 20
  },
  caption: {
    lineHeight: "1.5",
    fontSize: "0.9rem"
  }
});

const GuideRecommendation = ({ classes, name, description }) => (
  <div className={classes.root}>
    <Typography gutterBottom type="body2">
      {name}
    </Typography>
    <Typography
      gutterBottom
      type="caption"
      classes={{ caption: classes.caption }}
    >
      {description}
    </Typography>
  </div>
);

export default withStyles(styles)(GuideRecommendation);
