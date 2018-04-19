import Typography from "material-ui/Typography";
import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";

import withRoot from "../components/withRoot";

import Template from "../components/template";
import Photo from "../components/photo";
import FAQ from "../components/faq";
import ilbagianImage from "../components/ilbagihahn-image";

const styles = theme => ({
  image: {
    width: 630
  }
});

const faqs = [
  {
    question: "Where should I be and when?",
    answer:
      "The wedding starts at 4pm at Tyge William Cellars in Sonoma, California. The festivities at the wedding venue will end at 11pm."
  },
  {
    question: "How do I get to the venue?",
    answer: (
      <div>
        <Typography type="body1" align="center">
          We will be providing shuttles from The Lodge and will have more
          detailed shuttle information once we get closer to the wedding date.
        </Typography>
        <br />
        <Typography type="body1" align="center">
          For those who would like to drive, there will be some limited parking
          at the venue. However, please keep in mind the evening will end with a
          late night and the roads are narrow and unfamiliar for most, so we
          highly recommend either calling an Uber/Lyft or taking the shuttle.
        </Typography>
      </div>
    )
  },
  {
    question: "What should I wear?",
    answer:
      "We hope our wedding is a fun excuse to wear your favorite Cocktail Attire. However, wear whatever makes you feel your most festive, fancy self! Dinner and the Ceremony will take place on grass, so keep that in mind when choosing your shoes."
  },
  {
    question: "Can I bring the kids?",
    answer: (
      <div>
        <Typography type="body1" align="center">
          We both love all the amazing kids in our life, and we hope we can
          spend time with them at other times during the wedding weekend.
          However, we aren’t able to accommodate children outside the bridal
          party at our wedding.
        </Typography>
        <br />
        <Typography type="body1" align="center">
          For those looking for babysitters in the area, we recommend reaching
          out to Joanna’s Nannies by emailing booking@joannasnannies.com. They
          are based in Sonoma and have a great roster of sitters that have
          experience with every age range.
        </Typography>
      </div>
    )
  },
  {
    question: "What is the weather in Sonoma that time of year?",
    answer:
      "July in Sonoma will be warm during the day (80 F) and cooler in the evenings (55 F) so bringing layers for the evenings and having plenty of chilled rosé on hand during the day is recommended."
  },
  {
    question: "Are are you registered for gifts?",
    answer:
      "We've decided not to register for gifts. We live in a very small apartment in San Francisco with no storage space. We appreciate so many of you are traveling all the way to Sonoma to celebrate our wedding with us. That is the best gift we could ever ask for."
  },
  {
    question: "I have many more questions! What’s the best way to reach you?",
    answer:
      "Don’t hesitate to reach out with any questions at all! Email us at shawdiandmichael@gmail.com."
  }
];

const FAQs = ({ classes, pathname }) => (
  <Template title="Shawdi & Michael: FAQs" pathname={pathname}>
    <Photo src={ilbagianImage} />
    <Grid container justify="center" className={classes.content}>
      {faqs.map((faq, index) => (
        <Grid key={index} item xs={10}>
          <FAQ {...faq} />
        </Grid>
      ))}
    </Grid>
  </Template>
);

export default withRoot(withStyles(styles)(FAQs));
