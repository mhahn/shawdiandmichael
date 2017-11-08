import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";

import Section from "./section";

const styles = theme => ({});

const Lodging = ({ classes }) => (
  <Section>
    <Typography type="headline" gutterBottom>
      Lodging
    </Typography>
    <Typography gutterBottom>Stay in a hotel!</Typography>
  </Section>
);

export default withStyles(styles)(Lodging);
