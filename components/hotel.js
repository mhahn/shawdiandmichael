import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";

const styles = theme => ({
  root: {
    padding: 30,
    display: "flex",
    flexWrap: "wrap"
  },
  img: {
    objectFit: "cover",
    width: 330,
    height: "auto"
  },
  imgContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  textContainer: {
    padding: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    maxWidth: 200
  },
  caption: {
    lineHeight: "1.5",
    fontSize: "0.9rem"
  }
});

const Hotel = ({ classes, name, children, img: imgName }) => (
  <div className={classes.root}>
    <div className={classes.imgContainer}>
      <img className={classes.img} src={`/assets/img/${imgName}`} />
    </div>
    <div className={classes.textContainer}>
      <Typography type="title" align="left">
        {name}
      </Typography>
      <br />
      <Typography
        align="left"
        type="caption"
        classes={{ caption: classes.caption }}
      >
        {children}
      </Typography>
    </div>
  </div>
);

export default withStyles(styles)(Hotel);
