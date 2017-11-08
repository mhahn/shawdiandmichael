import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";

import Section from "./section";

const styles = theme => ({});

const FAQ = ({ classes }) => (
  <Section>
    <Typography type="headline" gutterBottom>
      FAQ
    </Typography>
    <Typography gutterBottom>FACTS!</Typography>
  </Section>
);

export default withStyles(styles)(FAQ);
