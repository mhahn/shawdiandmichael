import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";

import Section from "./section";

const styles = {
  row: {
    display: "flex",
    justifyContent: "space-around"
  },
  cell: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center"
  }
};

const Overview = ({ classes }) => (
  <Section>
    <div className={classes.row}>
      <div className={classes.cell}>
        <Typography type="display2" gutterBottom>
          Who
        </Typography>
        <Typography type="title">Our dearest friends & Family</Typography>
        <Typography type="subheading" gutterBottom>
          From near and Afar
        </Typography>
      </div>
    </div>
    <div className={classes.row}>
      <div className={classes.cell}>
        <Typography type="display2" gutterBottom>
          When
        </Typography>
        <Typography type="title" gutterBottom>
          July 28, 2018
        </Typography>
        <Typography type="subheading" gutterBottom>
          A Saturday
        </Typography>
      </div>
      <div className={classes.cell}>
        <Typography type="display2" gutterBottom>
          Where
        </Typography>
        <Typography type="title" gutterBottom>
          Sonoma, CA
        </Typography>
        <Typography type="subheading" gutterBottom>
          Tyge William Cellars
        </Typography>
      </div>
    </div>
  </Section>
);

export default withStyles(styles)(Overview);
