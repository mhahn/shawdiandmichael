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
        name: "Tosca Cafe",
        description: "Italian food & great cocktails in a bustling area"
      },
      {
        name: "El Techo",
        description: "Mexican food & margaritas on a rooftop, ‘nuff said."
      },
      {
        name: "Coquetta",
        description:
          "Spanish tapas right along the water (get there early for a little sunset stroll beforehand!)"
      }
    ]
  },
  {
    title: "Drinking",
    recommendations: [
      {
        name: "Trick Dog",
        description:
          "Cocktail bar with an ever-changing, always delightful menu"
      },
      {
        name: "White Chapel",
        description:
          "Every kind of gin you could ever desire, and a can’t miss gin & tonic on tap"
      },
      {
        name: "Horesefeather",
        description:
          "Our neighborhood cocktail bar that we visit frequently to drink away the stress of planning a wedding (just kidding!)"
      }
    ]
  },
  {
    title: "Exploring",
    recommendations: [
      {
        name: "Hayes Valley",
        description:
          "Our favorite neighborhood to walk around during the day. Boutiques, fancy coffee shops & artisinal ice cream are aplenty"
      },
      {
        name: "Ferry Building Marketplace",
        description:
          "The best of Bay Area food scene all lined up in little stalls and shops, the perfect way to spend an afternoon"
      },
      {
        name: "Golden Gate Bridge",
        description:
          "If you don’t instagram it, will people even know you went to San Francisco? We recommend starting at Crissy Field and strolling along the water towards the bridge (great photo ops, less tourists)."
      }
    ]
  }
];

const GuideSanFrancisco = ({ classes }) => (
  <Section title="San Francisco">
    {categories.map((category, i) => <GuideCategory key={i} {...category} />)}
  </Section>
);

export default withStyles(styles)(GuideSanFrancisco);
