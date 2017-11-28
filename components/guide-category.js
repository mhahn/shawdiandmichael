import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";

import GuideRecommendation from "./guide-recommendation";

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20
  },
  recommendations: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  header: {
    paddingBottom: 15
  }
});

const GuideCategory = ({ classes, title, recommendations }) => (
  <div className={classes.root}>
    <div className={classes.header}>
      <Typography gutterBottom type="title">
        {title}
      </Typography>
    </div>
    <div className={classes.recommendations}>
      {recommendations.map((rec, i) => (
        <GuideRecommendation
          key={i}
          name={rec.name}
          description={rec.description}
        />
      ))}
    </div>
  </div>
);

export default withStyles(styles)(GuideCategory);
