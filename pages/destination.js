import Typography from "material-ui/Typography";
import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";

import withRoot from "../components/withRoot";

import Template from "../components/template";
import Photo from "../components/photo";

const styles = theme => ({
  content: {
    paddingTop: 50
  },
  body: {
    maxWidth: 800
  }
});

const Destination = ({ classes }) => (
  <Template title="Shawdi & Michael: Destination">
    <Photo src="/assets/img/bench.jpg" />
    <Grid container className={classes.content}>
      <Grid item xs={2} />
      <Grid item xs={8} className={classes.body}>
        <Typography type="body1" align="center" gutterBottom>
          Located about an hour away from San Francisco, Sonoma is our favorite
          weekend getaway. It is home to the best wineries and restaurants in
          wine country and has the most charming town square filled with shops,
          bakeries and many more places to discover.
        </Typography>
        <br />
        <Typography type="body1" align="center" gutterBottom>
          We are so excited to share a place that is so special to us with all
          of our favorite people in the world!
        </Typography>
      </Grid>
    </Grid>
  </Template>
);

export default withRoot(withStyles(styles)(Destination));
