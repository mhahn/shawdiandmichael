import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";

import Section from "./section";

const styles = theme => ({});

const Explore = ({ classes }) => (
  <Section title="Explore">
    <Typography gutterBottom>...brb!</Typography>
  </Section>
);

export default withStyles(styles)(Explore);
