import { withStyles } from "material-ui/styles";
import Link from "next/link";
import classNames from "classnames";

import IconButton from "material-ui/IconButton";
import Drawer from "material-ui/Drawer";
import Typography from "material-ui/Typography";
import CloseIcon from "material-ui-icons/Close";

const styles = theme => ({
  close: {
    display: "flex",
    justifyContent: "flex-end",
    padding: 30
  },
  modal: {
    height: "100vh"
  },
  sections: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  link: {
    cursor: "pointer"
  },
  active: {
    fontWeight: 500,
    borderBottom: "1px solid black"
  }
});

const HeaderMobileNav = ({
  classes,
  open,
  onRequestClose,
  sections,
  pathname
}) => (
  <Drawer anchor="top" open={open} onRequestClose={onRequestClose}>
    <div className={classes.modal}>
      <div className={classes.close}>
        <IconButton onClick={onRequestClose}>
          <CloseIcon />
        </IconButton>
      </div>
      <div className={classes.sections}>
        {sections.map(section => (
          <Link href={`/${section.id}`} prefetch key={section.id}>
            <Typography
              className={classNames(classes.link, {
                [classes.active]: pathname === `/${section.id}`
              })}
              type="headline"
              gutterBottom
            >
              {section.label}
            </Typography>
          </Link>
        ))}
      </div>
    </div>
  </Drawer>
);

export default withStyles(styles)(HeaderMobileNav);
