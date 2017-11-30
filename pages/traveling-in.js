import Typography from "material-ui/Typography";
import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";

import withRoot from "../components/withRoot";

import Template from "../components/template";
import Photo from "../components/photo";

const styles = theme => ({
  image: {
    width: 630
  },
  content: {
    paddingTop: 50
  },
  body: {
    maxWidth: 800
  }
});

const TravelingIn = ({ classes }) => (
  <Template title="Shawdi & Michael: Traveling In">
    <Photo src="/assets/img/carousel.jpg" />
    <Grid container className={classes.content}>
      <Grid item xs={2} />
      <Grid item xs={8} className={classes.body}>
        <Typography type="body1" align="center" gutterBottom>
          For those flying in from out of the country or out of state, we
          recommend flying into San Francisco International Airport (SFO) and
          renting a car to make the 1 hour & 20 minute drive to Sonoma from
          there.
        </Typography>
        <br />
        <Typography type="body1" align="center" gutterBottom>
          If you want to spend a few days in San Francisco before or after your
          trip, you can see some of our suggestions on what to do (and where to
          eat!) *here*.
        </Typography>
      </Grid>
    </Grid>
  </Template>
);

export default withRoot(withStyles(styles)(TravelingIn));
