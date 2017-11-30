import { withStyles } from "material-ui/styles";

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
  }
});

const HeaderMobileNav = ({
  classes,
  open,
  onRequestClose,
  sections: additionalSections
}) => {
  const sections = [{ id: "home", label: "HOME" }].concat(additionalSections);

  return (
    <Drawer anchor="top" open={open} onRequestClose={onRequestClose}>
      <div className={classes.modal}>
        <div className={classes.close}>
          <IconButton onClick={onRequestClose}>
            <CloseIcon />
          </IconButton>
        </div>
        <div className={classes.sections}>
          {sections.map(section => (
            <div
              className={classes.link}
              key={section.id}
              onClick={() => {
                onRequestClose();
                console.log("link");
              }}
            >
              <Typography type="headline" gutterBottom>
                {section.label}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </Drawer>
  );
};

export default withStyles(styles)(HeaderMobileNav);
