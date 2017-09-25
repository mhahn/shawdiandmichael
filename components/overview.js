import { withStyles } from "material-ui/styles";
import withWidth from "material-ui/utils/withWidth";
import Typography from "material-ui/Typography";
import compose from "recompose/compose";

import Section from "./section";

const styles = theme => ({
  row: {
    display: "flex",
    justifyContent: "space-around",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row"
    },
    [theme.breakpoints.down("md")]: {
      flexDirection: "column"
    }
  },
  cell: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    padding: 30
  }
});

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

export default compose(withStyles(styles), withWidth())(Overview);
