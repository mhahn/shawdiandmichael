import Typography from "material-ui/Typography";
import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";

import withRoot from "../components/withRoot";

import Template from "../components/template";
import Hotel from "../components/hotel";

const styles = theme => ({
  content: {
    maxWidth: 1000
  }
});

const WhereToStay = ({ classes, pathname }) => (
  <Template title="Shawdi & Michael: Where to Stay" pathname={pathname}>
    <Grid className={classes.content} container justify="center">
      <Hotel
        name="The Lodge at Sonoma"
        img="the-lodge.jpg"
        href="http://www.marriott.com/hotels/travel/sfols-the-lodge-at-sonoma-renaissance-resort-and-spa/"
      >
        This is the hotel Michael & Shawdi will be staying at! It's near Sonoma
        Square (with frequent shuttles back and forth) and has a great pool for
        us all to hang and enjoy a few drinks by!
      </Hotel>
      <Hotel
        name="El Dorado Hotel"
        img="el-dorado.jpg"
        href="https://www.eldoradosonoma.com/"
      >
        This is a boutique hotel right on Sonoma Square! It’s perfect for
        exploring the square and all the shops and amazing restaurants around
        it.
      </Hotel>
      <Hotel
        name="Best Western"
        img="best-western.jpg"
        href="http://www.sonomavalleyinn.com/"
      >
        This is a hotel just around the corner from Sonoma Square. It’s a great
        option if you’re planning to do lots of exploring and wine tasting and
        just want a place to put your bags and rest your head.
      </Hotel>
      <Hotel
        name="Airbnb"
        img="airbnb.jpg"
        href="http://www.airbnb.com/c/silbagian1"
      >
        Of course, Airbnb is one of our favorite options when traveling! If
        you’ve never stayed at an Airbnb before, you can use{" "}
        <a href="http://www.airbnb.com/c/silbagian1">this link</a> for $40 off!
      </Hotel>
    </Grid>
  </Template>
);

export default withRoot(withStyles(styles)(WhereToStay));
