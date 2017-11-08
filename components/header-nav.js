import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";
import classNames from "classnames";
import { Link } from "react-scroll";

const styles = theme => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    backgroundColor: "white",
    height: 50,
    zIndex: 100
  },
  sticky: {
    color: "white",
    backgroundColor: theme.custom.black
  },
  link: {
    padding: 30,
    cursor: "pointer"
  },
  active: {
    color: "rgb(161, 155, 125)"
  }
});

const sections = [
  {
    label: "getting there",
    id: "getting-there"
  },
  {
    label: "lodging",
    id: "lodging"
  },
  { label: "faq", id: "faq" }
];

const HeaderNav = ({ classes, style, sticky }) => (
  <div
    className={classNames(classes.container, { [classes.sticky]: sticky })}
    style={style}
  >
    {sections.map((section, index) => (
      <Link
        to={section.id}
        key={index}
        smooth={true}
        activeClass={classes.active}
        spy={true}
        hashSpy={true}
        offset={10}
        duration={400}
      >
        <Typography
          className={classes.link}
          type="subheading"
          gutterBottom
          color="inherit"
        >
          {section.label}
        </Typography>
      </Link>
    ))}
  </div>
);

export default withStyles(styles)(HeaderNav);
