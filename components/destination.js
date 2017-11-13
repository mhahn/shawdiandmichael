import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";

import Section from "./section";

const styles = theme => ({});

const Destination = ({ classes }) => (
  <Section title="Destination">
    <div>
      <Typography type="body1" align="center" gutterBottom>
        Located about an hour away from San Francisco, Sonoma is our favorite
        weekend getaway. It is home to the best wineries and restaurants in wine
        country and has the most charming town square filled with shops,
        bakeries and many more places to discover.
      </Typography>
      <br />
      <Typography type="body1" align="center" gutterBottom>
        We are so excited to share a place that is so special to us with all of
        our favorite people in the world!
      </Typography>
    </div>
  </Section>
);

export default withStyles(styles)(Destination);
