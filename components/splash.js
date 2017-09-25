import ProgressiveImage from "react-progressive-image";
import { withStyles } from "material-ui/styles";
import { CSSTransitionGroup } from "react-transition-group";
import Typography from "material-ui/Typography";

import Title from "./title";
import DownArrow from "./down-arrow";

const styles = {
  root: {
    minHeight: "100vh",
    position: "relative"
  },
  image: {
    zIndex: 0,
    height: "100%",
    width: "100%",
    objectFit: "cover",
    position: "absolute",
    top: 0,
    left: 0
  },
  overlay: {
    zIndex: 1,
    background: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6))",
    backgroundSize: "cover",
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0
  },
  content: {
    zIndex: 2,
    display: "flex",
    height: "100%",
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0
  },
  text: {
    color: "white"
  },
  backgroundAppear: {
    opacity: 0.01
  },
  backgroundAppearActive: {
    opacity: 1,
    transition: "opacity 1s ease-in-out"
  }
};

const Splash = ({ classes }) => (
  <div className={classes.root}>
    <CSSTransitionGroup
      transitionEnterTimeout={1000}
      transitionLeave={false}
      transitionName={{
        enter: classes.backgroundAppear,
        enterActive: classes.backgroundAppearActive
      }}
    >
      <ProgressiveImage src="assets/img/home.jpg" placeholder="">
        {src => {
          if (!src) return null;

          return (
            <div>
              <img className={classes.image} src={src} />
              <div className={classes.overlay} />
              <div className={classes.content}>
                <div className={classes.container}>
                  <Title />
                  <Typography type="subheading" className={classes.text}>
                    Scroll for More
                  </Typography>
                  <DownArrow />
                </div>
              </div>
            </div>
          );
        }}
      </ProgressiveImage>
    </CSSTransitionGroup>
  </div>
);

export default withStyles(styles)(Splash);
