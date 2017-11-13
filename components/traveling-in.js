import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";

import Section from "./section";

const styles = theme => ({});

const TravelingIn = ({ classes }) => (
  <Section title="Traveling In">
    <div>
      <Typography type="body1" align="center" gutterBottom>
        For those flying in from out of the country or out of state, we
        recommend flying into San Francisco International Airport (SFO) and
        renting a car to make the 1 hour & 20 minute drive to Sonoma from there.
      </Typography>
      <br />
      <Typography type="body1" align="center" gutterBottom>
        If you want to spend a few days in San Francisco before or after your
        trip, you can see some of our suggestions on what to do (and where to
        eat!) *here*.
      </Typography>
    </div>
  </Section>
);

export default withStyles(styles)(TravelingIn);
