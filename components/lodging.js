import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";
import Grid from "material-ui/Grid";

import Section from "./section";

const styles = theme => ({
  section: {
    maxWidth: 1300
  }
});

const WhereToStay = ({ classes }) => (
  <Section title="Where to Stay" className={classes.section}>
    <div className={classes.container}>
    </div>
  </Section>
);

export default withStyles(styles)(WhereToStay);
