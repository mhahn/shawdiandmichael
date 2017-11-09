import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";

import Section from "./section";

const styles = theme => ({});

const GettingThere = ({ classes }) => (
  <Section title="Getting There">
    <Typography gutterBottom>Take a plane!</Typography>
  </Section>
);

export default withStyles(styles)(GettingThere);
