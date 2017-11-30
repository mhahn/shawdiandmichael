import { Component } from "react";
import { withStyles } from "material-ui/styles";
import Link from "next/link";
import classNames from "classnames";

import Typography from "material-ui/Typography";
import Hidden from "material-ui/Hidden";
import MenuIcon from "material-ui-icons/Menu";

import HeaderMobileNav from "./header-mobile-nav";

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
  mobileContainer: {
    justifyContent: "left"
  },
  modal: {
    height: "100vh"
  },
  menuToggle: {
    display: "flex",
    cursor: "pointer",
    justifyContent: "space-around",
    alignItems: "center",
    marginLeft: 30
  },
  menuTitle: {
    paddingLeft: 5
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
    label: "HOME",
    id: ""
  },
  {
    label: "DESTINATION",
    id: "destination"
  },
  {
    label: "TRAVELING IN",
    id: "traveling-in"
  },
  {
    label: "WHERE TO STAY",
    id: "where-to-stay"
  },
  { label: "FAQs", id: "faqs" }
];

class HeaderNav extends Component {
  state = {
    mobileOpen: false
  };

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  render() {
    const { classes, style, sticky } = this.props;
    return (
      <div>
        <Hidden smUp implementation="css">
          <div
            className={classNames(classes.container, {
              [classes.sticky]: sticky,
              [classes.mobileContainer]: true
            })}
            style={style}
          >
            <div
              className={classes.menuToggle}
              onClick={this.handleDrawerToggle}
            >
              <MenuIcon />
              <Typography
                className={classNames(classes.menuTitle, {
                  [classes.sticky]: sticky
                })}
              >
                MENU
              </Typography>
            </div>
            <HeaderMobileNav
              sections={sections}
              onRequestClose={this.handleDrawerToggle}
              open={this.state.mobileOpen}
            />
          </div>
        </Hidden>
        <Hidden smDown implementation="css">
          <div
            className={classNames(classes.container, {
              [classes.sticky]: sticky
            })}
            style={style}
          >
            {sections.map((section, index) => (
              <Link href={`/${section.id}`} prefetch>
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
        </Hidden>
      </div>
    );
  }
}

export default withStyles(styles)(HeaderNav);
