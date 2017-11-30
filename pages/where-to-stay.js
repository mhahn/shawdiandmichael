import Typography from "material-ui/Typography";
import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";

import withRoot from "../components/withRoot";

import Template from "../components/template";
import Hotel from "../components/hotel";

const styles = theme => ({
  image: {
    width: 630
  },
  content: {
    maxWidth: 1000
  }
});

const WhereToStay = ({ classes, pathname }) => (
  <Template title="Shawdi & Michael: Where to Stay" pathname={pathname}>
    <Grid container className={classes.content} justify="center" align="center">
      <Grid item xs={12} sm={6}>
        <Hotel name="The Lodge at Sonoma" img="the-lodge.jpg">
          This is the hotel Michael & Shawdi will be staying at! It's near
          Sonoma Square (with frequent shuttles back and forth) and has a great
          pool for us all to hang and enjoy a few drinks by!
        </Hotel>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Hotel name="El Dorado Hotel" img="el-dorado.jpg">
          This is a boutique hotel right on Sonoma Square! It’s perfect for
          exploring the square and all the shops and amazing restaurants around
          it.
        </Hotel>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Hotel name="Best Western" img="best-western.jpg">
          This is a hotel just around the corner from Sonoma Square. It’s a
          great option if you’re planning to do lots of exploring and wine
          tasting and just want a place to put your bags and rest your head.
        </Hotel>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Hotel name="Airbnb" img="airbnb.jpg">
          Of course, Airbnb is one of our favorite options when traveling! If
          you’ve never stayed at an Airbnb before, you can use{" "}
          <a href="http://www.airbnb.com/c/silbagian1">this link</a> for $40
          off!
        </Hotel>
      </Grid>
    </Grid>
  </Template>
);

export default withRoot(withStyles(styles)(WhereToStay));
