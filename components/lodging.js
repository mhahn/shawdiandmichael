import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";

import Hotel from "./hotel";
import Section from "./section";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center"
  },
  section: {
    maxWidth: 1300
  }
});

const Lodging = ({ classes }) => (
  <Section title="WHERE TO STAY" className={classes.section}>
    <div className={classes.container}>
      <Hotel name="The Lodge at Sonoma" img="the-lodge.jpg">
        This is the hotel Michael & Shawdi will be staying at! It's near Sonoma
        Square (with frequent shuttles back and forth) and has a great pool for
        us all to hang and enjoy a few drinks by!
      </Hotel>
      <Hotel name="El Dorado Hotel" img="el-dorado.jpg">
        This is a boutique hotel right on Sonoma Square! It’s perfect for
        exploring the square and all the shops and amazing restaurants around
        it.
      </Hotel>
      <Hotel name="Best Western" img="best-western.jpg">
        This is a hotel just around the corner from Sonoma Square. It’s a great
        option if you’re planning to do lots of exploring and wine tasting and
        just want a place to put your bags and rest your head.
      </Hotel>
      <Hotel name="Airbnb" img="airbnb.jpg">
        Of course, Airbnb is one of our favorite options when traveling! If
        you’ve never stayed at an Airbnb before, you can use{" "}
        <a href="http://www.airbnb.com/c/silbagian1">this link</a> for $40 off!
      </Hotel>
    </div>
  </Section>
);

export default withStyles(styles)(Lodging);
