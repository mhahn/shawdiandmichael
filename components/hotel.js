import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";

const styles = theme => ({
  root: {
    margin: 30,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    height: 530
  },
  img: {
    objectFit: "cover",
    width: "100%",
    height: "auto"
  },
  imgContainer: {
    display: "flex",
    alignItems: "flex-start"
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%"
  }
});

const Hotel = ({ classes, name, children, img: imgName }) => (
  <div className={classes.root}>
    <div className={classes.imgContainer}>
      <img className={classes.img} src={`/assets/img/${imgName}`} />
    </div>
    <div className={classes.textContainer}>
      <Typography type="title" align="center">
        {name}
      </Typography>
      <br />
      <Typography align="center">{children}</Typography>
    </div>
  </div>
);

export default withStyles(styles)(Hotel);
