import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";

import Section from "./section";

const styles = theme => ({});

const GettingThere = ({ classes }) => (
  <Section>
    <Typography type="headline" gutterBottom>
      Getting There
    </Typography>
    <Typography gutterBottom>Take a plane!</Typography>
  </Section>
);

export default withStyles(styles)(GettingThere);
