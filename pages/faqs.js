import Typography from "material-ui/Typography";
import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";

import withRoot from "../components/withRoot";

import Template from "../components/template";
import Photo from "../components/photo";
import FAQ from "../components/faq";

const styles = theme => ({
  image: {
    width: 630
  },
  content: {
    maxWidth: 800,
    paddingTop: 20
  }
});

const faqs = [
  {
    question: "Where should I be and when?",
    answer:
      "The wedding starts promptly (ie not Persian Standard Time 😉) at 4pm at Tyge William Cellars in Sonoma, California."
  },
  {
    question: "How do I get to the venue?",
    answer: (
      <div>
        <Typography type="subheading" align="center">
          We will be providing shuttles from The Lodge and will have more
          detailed shuttle information once we get closer to the wedding date.
        </Typography>
        <br />
        <Typography type="subheading" align="center">
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
        <Typography type="subheading" align="center">
          We both love all the amazing kids in our life, and we hope we can
          spend time with them at other times during the wedding weekend.
          However, we aren’t able to accommodate children outside the bridal
          party at our wedding.
        </Typography>
        <br />
        <Typography type="subheading" align="center">
          For those looking for babysitters in the area, we recommend reaching
          out to Joanna’s Nannies by emailing{" "}
          <a href="mailto:booking@joannasnannies.com">
            booking@joannasnannies.com
          </a>. They are based in Sonoma and have a great roster of sitters that
          have experience with every age range.
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
    question: "I have many more questions! What’s the best way to reach you?",
    answer:
      "Don’t hesitate to reach out with any questions at all! Email either of us at shawdi.ilbagian@gmail.com and mwhahn@gmail.com."
  }
];

const FAQs = ({ classes }) => (
  <Template title="Shawdi & Michael: FAQs">
    <Photo src="/assets/img/ilbagihahn.jpg" />
    <div className={classes.content}>
      {faqs.map((faq, index) => <FAQ key={index} {...faq} />)}
    </div>
  </Template>
);

export default withRoot(withStyles(styles)(FAQs));
