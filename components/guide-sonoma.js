import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";

import Section from "./section";
import GuideCategory from "./guide-category";

const styles = theme => ({});

const categories = [
  {
    title: "Eating",
    recommendations: [
      {
        name: "The Girl & The Fig",
        description:
          "Our (and everyone else’s!) favorite Sonoma restaurant with cozy vibes and incredible food"
      },
      {
        name: "El Dorado Kitchen",
        description:
          "A perfect stop when you’re exploring the square; California cuisine with great wines"
      },
      {
        name: "Fremont Diner",
        description:
          "Roadside diner with comfort food and milkshakes you can’t miss"
      }
    ]
  },
  {
    title: "Drinking",
    recommendations: [
      {
        name: "Gundlach Bundschu",
        description: "Hard to pronounce, easy to drink"
      },
      {
        name: "Scribe",
        description:
          "Make a reservation and get a peek at the San Francisco hipster crowd"
      },
      {
        name: "Petroni Vineyards",
        description:
          "The trek up a windy road that pays off with great wines and amazing views"
      }
    ]
  },
  {
    title: "Exploring",
    recommendations: [
      {
        name: "Sonoma Town Square",
        description:
          "Historic town square with shops, restaurants and tasting rooms"
      },
      {
        name: "Sonoma Bike Tours",
        description:
          "Rent a bike and spend the afternoon cycling in the sunshine between wine tastings"
      }
    ]
  }
];

const GuideSonoma = ({ classes }) => (
  <Section title="Sonoma">
    {categories.map((category, i) => <GuideCategory key={i} {...category} />)}
  </Section>
);

export default withStyles(styles)(GuideSonoma);
