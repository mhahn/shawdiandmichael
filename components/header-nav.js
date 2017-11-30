import { Component } from "react";
import { withStyles } from "material-ui/styles";
import Link from "next/link";
import classNames from "classnames";

import Typography from "material-ui/Typography";
import Hidden from "material-ui/Hidden";
import MenuIcon from "material-ui-icons/Menu";

import HeaderMobileNav from "./header-mobile-nav";

const styles = theme => ({
  root: {
    width: "100%"
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    backgroundColor: "white",
    height: 50,
    zIndex: 100,
    width: "100%"
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
    marginLeft: 30,
    cursor: "pointer"
  },
  active: {
    fontWeight: 500,
    borderBottom: "1px solid black"
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
    const { classes, pathname } = this.props;
    return (
      <div className={classes.root}>
        <Hidden smUp implementation="css">
          <div
            className={classNames(classes.container, {
              [classes.mobileContainer]: true
            })}
          >
            <div
              className={classes.menuToggle}
              onClick={this.handleDrawerToggle}
            >
              <MenuIcon />
              <Typography className={classes.menuTitle}>MENU</Typography>
            </div>
            <HeaderMobileNav
              sections={sections}
              onRequestClose={this.handleDrawerToggle}
              open={this.state.mobileOpen}
              pathname={pathname}
            />
          </div>
        </Hidden>
        <Hidden smDown implementation="css">
          <div className={classes.container}>
            {sections.map((section, index) => (
              <Link href={`/${section.id}`} prefetch key={section.id}>
                <Typography
                  className={classNames(classes.link, {
                    [classes.active]: pathname === `/${section.id}`
                  })}
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
