import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";

import Section from "./section";
import FAQ from "./faq";

const styles = theme => ({});

const faqs = [
  {
    question: "Will there be booze?",
    answer: "You betcha!"
  }
];

const FAQs = ({ classes }) => (
  <Section title="FAQs">
    {faqs.map((faq, index) => <FAQ key={index} {...faq} />)}
  </Section>
);

export default withStyles(styles)(FAQs);
