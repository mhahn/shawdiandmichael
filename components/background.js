import { Component } from "react";
import ProgressiveImage from "react-progressive-image";
import { withStyles } from "material-ui/styles";

const styles = {
  image: {
    position: "absolute",
    zIndex: 0,
    height: "100%",
    width: "100%",
    objectFit: "cover"
  },
  overlay: {
    zIndex: 1,
    background: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6))",
    backgroundSize: "cover",
    position: "absolute",
    width: "100%",
    height: "100%"
  },
  content: {
    zIndex: 2,
    position: "absolute",
    height: "100%",
    width: "100%"
  }
};

const Background = ({ children, classes }) => (
  <div>
    <ProgressiveImage src="assets/img/home.jpg" placeholder="">
      {src => {
        if (!src) return null;

        return (
          <div>
            <img className={classes.image} src={src} />
            <div className={classes.overlay} />
            <div className={classes.content}>{children}</div>
          </div>
        );
      }}
    </ProgressiveImage>
  </div>
);

export default withStyles(styles)(Background);
